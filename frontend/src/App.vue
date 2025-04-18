<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Message Board</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/about" text>About</v-btn>
      <v-btn to="/feed" text>Feed</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
