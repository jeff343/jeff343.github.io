import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "./styles/theme";
import Header from "./components/Header";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} current={theme} />
      <PortfolioPage />
    </ThemeProvider>
  );
}

export default App;
