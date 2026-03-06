import React, { useEffect } from "react";
import Layout from "./components/layout/layout";
import Home from "./pages/Home";
import { usethemeStore } from "./stores/useThemeStore";

function App() {
  const { theme } = usethemeStore();

  useEffect(
    () => document.documentElement.setAttribute("data-theme", theme),
    [theme],
  );

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
