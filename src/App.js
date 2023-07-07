import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Indonesia from "./pages/covid/Indonesia";
import Province from "./pages/covid/Province";
import About from "./pages/About";
import Layout from "./layout";
import { ThemeProvider } from "styled-components";
import theme from './utils/constants/theme';
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/covid/indonesia" element={<Indonesia />} />
            <Route path="/covid/province" element={<Province />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
