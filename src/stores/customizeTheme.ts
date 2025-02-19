import { defineStore } from "pinia";
import { isMobile } from "@/utils/common";

interface Color {
  colorId: number;
  colorName: string;
  colorValue: string;
}

interface State {
  miniSidebar: boolean;
  darkTheme: boolean;
  primaryColor: Color;
  mainSidebar: boolean;
}

export const useCustomizeThemeStore = defineStore({
  id: "customizeTheme",
  state: (): State => ({
    miniSidebar: false,
    darkTheme: false,
    primaryColor: {
      colorId: 2,
      colorName: "grey",
      colorValue: "#344767",
    },
    mainSidebar: isMobile() ? false : true,
  }),

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ["darkTheme"] }],
  },

  getters: {},
  actions: {
    setMiniSideBar(payload: boolean) {
      this.miniSidebar = payload;
    },
    setPrimaryColor(payload: Color) {
      this.primaryColor = payload;
    },
  },
});
