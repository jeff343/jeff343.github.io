// import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, GlobalStyles } from "./styles/theme";
import Header from "./components/Header";
import PortfolioPage from "./pages/PortfolioPage";

// TODO: add theme switcher to header
function App() {
  // const [theme, setTheme] = useState(lightTheme);

  // const toggleTheme = () => {
  //   setTheme(theme === lightTheme ? darkTheme : lightTheme);
  // };

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header />
      <PortfolioPage />
    </ThemeProvider>
  );
}

export default App;