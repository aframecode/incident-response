<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon ></v-app-bar-nav-icon>
      <v-toolbar-title>Incident Response</v-toolbar-title>
        
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
  },

  data: () => ({
    drawer: false
  })
};
</script>
