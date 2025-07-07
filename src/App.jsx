import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products/Products";
import Customers from "./pages/Customers/Customers";
import Shop from "./pages/Shop/Shop";
import Income from "./pages/Income/Income";
import Promote from "./pages/Promote/Promote";
import { Routes, Route, Navigate } from "react-router-dom";
import LayoutContainer from "./layouts/LayoutContainer/LayoutContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LayoutContainer>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/income" element={<Income />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default App;
