<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useDisplay } from "vuetify";
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
import ToolbarLanguage from "@/components/toolbar/ToolbarLanguage.vue";
import ToolbarNotifications from "./ToolbarNotifications.vue";
import ToolbarUser from "./ToolbarUser.vue";
import { useTodoStore } from "@/views/app/todo/todoStore";
const { mdAndUp } = useDisplay();
const todoStore = useTodoStore();
const customizeTheme = useCustomizeThemeStore();
const showMobileSearch = ref(false);
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!--App Bar -->
  <!-- ---------------------------------------------- -->
  <v-app-bar>
    <!-- ---------------------------------------------- -->
    <!-- search input mobil -->
    <!-- ---------------------------------------------- -->
    <div class="d-flex flex-fill align-center" v-if="showMobileSearch">
      <v-text-field
        color="primary"
        variant="solo"
        prepend-inner-icon="mdi-magnify"
        append-inner-icon="mdi-close"
        @click:append-inner="showMobileSearch = false"
        hide-details
        placeholder="Search"
      ></v-text-field>
    </div>
    <div v-else class="d-flex align-center justify-space-between w-100">
      <!-- ---------------------------------------------- -->
      <!-- NavIcon -->
      <!-- ---------------------------------------------- -->
      <v-app-bar-nav-icon
        @click="customizeTheme.mainSidebar = !customizeTheme.mainSidebar"
      ></v-app-bar-nav-icon>
      <div>
        <v-text-field
          v-if="mdAndUp"
          style="width: 400px"
          color="primary"
          variant="solo"
          density="compact"
          prepend-icon="mdi-magnify"
          hide-details
          placeholder="Search"
        ></v-text-field>
      </div>

      <v-spacer></v-spacer>

      <div>
        <v-btn v-if="!mdAndUp" icon @click="showMobileSearch = true">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <!-- search input desktop -->

        <v-btn v-if="mdAndUp" icon class="text-none">
          <v-badge dot color="success">
            <v-icon>mdi-account-multiple-outline</v-icon>
          </v-badge>
        </v-btn>

        <v-btn icon to="/apps/todo" class="text-none">
          <v-badge :content="`${todoStore.getTodoList.length} +`" color="error">
            <v-icon>mdi-calendar-check</v-icon>
          </v-badge>
        </v-btn>
        <ToolbarLanguage />
        <ToolbarNotifications />
        <ToolbarUser />
      </div>
    </div>
  </v-app-bar>
</template>

<style scoped lang="scss"></style>
