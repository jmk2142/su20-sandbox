<template lang="html">
  <v-app id="inspire">
    <div>
      <v-app-bar color="deep-purple accent-4" dense dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Vuetify Demo</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>
  </v-app>

  <!-- <v-app>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-app-bar app dense color="deep-purple accent-4">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Some Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>

      </v-container>
    </v-main>

    <v-footer app></v-footer>
  </v-app> -->
</template>

<script>
export default {
  name: "VuetifyDemo"
};
</script>

<style lang="css" scoped></style>
