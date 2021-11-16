import './App.css';
import Navibar from './components/Navbar';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState}  from 'react';
import Home from './components/pages/Home';
import Order from './Order';
import { Switch, Route, useLocation } from 'react-router-dom'


const URL = "http://localhost/syksynprojekti2021/";

export default function App() {

    const [category, setCategory] = useState(null);
/*     const [searchPhrase, setSeachPhrase] = useState(''); */
    const [cart, setCart] = useState([]); 

    let location = useLocation();

    useEffect(() => {
        if (location.state !==undefined) {
            setCategory({id: location.state.id, name: location.state.name});
        
        }
    }, [location.state])

    useEffect(() => {
        if ('cart' in localStorage) {
          setCart(JSON.parse(localStorage.getItem('cart')));
          //localStorage.clear()  // tyhjentää local storagen refreshillä
        }
      }, []);
    

    function addToCart(product) {
        if (cart.some(item => item.id === product.id)) {
          const existingProduct = cart.filter(item => item.id === product.id);
          updateAmount(parseInt(existingProduct[0].amount) +1, product);
        }
        else {
          product["amount"] = 1;
          console.log(product.name + "määrä: " + product.amount)
          const newCart = [...cart,product];
          setCart(newCart); 
          localStorage.setItem('cart',JSON.stringify(newCart));
        }
      }

    
    function removeFromCart(product) {
      const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
      setCart(itemsWithoutRemoved);
      localStorage.setItem('cart', JSON.stringify(itemsWithoutRemoved));
    }

    function updateAmount(amount, product) {
      product.amount = amount;
      const index = cart.findIndex((item => item.id === product.id));
      const modifiedCart = Object.assign([...cart], {[index]: product});
      setCart(modifiedCart);
      localStorage.setItem('cart',JSON.stringify(modifiedCart));
      }

/*       function emptyCart() {
        localStorage.clear()
      }
  */
    return (
        <>
          <Navibar url={URL} cart={cart} setCategory={setCategory}/>
{/*           <Header search={search}/> */}
          <div id="content" className="container-fluid">
          <Switch>
            <Route
                path="/" render={() =>
                    <Home
                        URL={URL}
                        category={category}
                        addToCart={addToCart}
                      />}
                      exact
            />
            <Route path="/order" render={() => 
              <Order url={URL} 
                URL={URL}
                cart={cart}
               /*  empty={emptyCart} */
                removeFromCart={removeFromCart} />} 
              /> 
              <Footer/>
          </Switch>
          </div> 
        </>
    )
}
 