import React, { useState } from "react";


// Styling
import { GlobalStyle } from "./styles";
import { BeatLoader } from "react-spinners";
import NavBar from "./components/NavBar";
// Components
import Routes from "./components/Route";
import { ThemeProvider } from "styled-components";

import { useSelector } from "react-redux";

// Data


const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {

  const loadingProduct = useSelector((state)=>state.products.loading)
  const loadingShop = useSelector((state)=> state.shops.loading)
  const [currentTheme, setCurrentTheme] = useState("light");
  // const [products, setProducts] = useState(productsData);

  // const deleteProduct = (productId) => {
  //   const updatedProducts = products.filter(
  //     (product) => product.id !== productId
  //   );
  //   setProducts(updatedProducts);
  // };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      {loadingProduct || loadingShop ? <BeatLoader></BeatLoader>: <Routes />}
      
    
    </ThemeProvider>
  );
}

export default App;
