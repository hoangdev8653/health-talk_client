"use client";

import { Provider } from "react-redux";
import { store } from "@/stores/store";
import { ThemeProvider } from "@/components/ThemeProvider";
import React from "react";

function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </Provider>
  );
}

export default ProviderWrapper;
