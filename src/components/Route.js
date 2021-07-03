import { Route, Switch } from "react-router";
import ShopDetail from "./ShopDetail";
import FormProduct from "./FormProduct";
import ShopList from "./ShopList";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import Home from "./Home";
import { useSelector } from "react-redux";

const Routes = ()=>{

    const products = useSelector((state)=>state.products.products)
    return(
        <Switch>
        <Route  path= {["/shops/:shopId/products/new", "/products/:productSlug/edit"]} >
          
          <FormProduct />
          
         </Route>
          {/* <Route path="/products/:productSlug/edit">
          <FormProduct />
            </Route> */}
       
          <Route path="/products/:productSlug">
            <ProductDetail />
          </Route>
          <Route path={"/shops/:shopSlug"}>
            <ShopDetail />
          </Route>
          <Route path ="/shops">
            <ShopList />
          </Route>
          <Route path="/products">
            <ProductList products={products}  />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
         
        </Switch>
    );
}

export default Routes;