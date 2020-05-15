<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="; vibrate(100); drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
      <template>
        <!-- @detected-condition fires when the connectivity status of the device changes -->
        <offline @detected-condition="handleConnectivityChange">
          <!-- Only renders when the device is online -->
          <div slot="online">
            <p>Online</p>
          </div>
          <!-- Only renders when the device is offline -->
          <div slot="offline">
            <p>Offline</p>
          </div>
        </offline>
      </template>
    </v-app-bar>

    <v-content class="">
      <v-container class="fill-height py-0" fluid>
        <v-row fluid align="center">
          <Map fluid style="width: 100%"></Map>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020 Find Yourself</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Map from './components/Map.vue'
  import offline from 'v-offline';
  export default {
    components: {
      Map,
      offline
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    methods: {
      vibrate(pattern) {
        console.log('vibrate');
        window.navigator.vibrate(pattern);
      },
      handleConnectivityChange(status) {
        console.log(status);
      }
    },
    created () {
      this.$vuetify.theme.dark = true;

      // window.addEventListener('offline', function(e) { console.log('offline', e); });
      //
      // window.addEventListener('online', function(e) { console.log('online', e); });
    },
  }
</script>

<style>
  .offline {
    background-color: #fc9842;
    background-image: linear-gradient(315deg, #fc9842 0%, #fe5f75 74%);
  }
  .online {
    background-color: #00b712;
    background-image: linear-gradient(315deg, #00b712 0%, #5aff15 74%);
  }
</style>
