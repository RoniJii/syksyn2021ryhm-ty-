import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState }  from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Register from './components/pages/Register';
import Order from './Order';
import Admin from './components/Admin';
import Kahvi from './components/Kahvi';
import Tee from './components/Tee';
import Muut from './components/Muut';
import Product from './components/Product';

const URL = "http://localhost/syksynprojekti2021/";

export default function App() {

    const [category, setCategory] = useState(null);
/*     const [searchPhrase, setSeachPhrase] = useState(''); */
    const [cart, setCart] = useState([]); 
    const [product,setProduct] = useState(null);

    let location = useLocation();

    useEffect(() => {
        if (location.state !==undefined) {
          if (location.pathname==="/kahvia") {
            setCategory({id: location.state.id, name: location.state.name});
          } else if (location.pathname==="/product") {
            setProduct({id: location.state.id, name: location.state.name});
          }
        }
    }, [location.state, location.pathname])

    useEffect(() => {
        if ('cart' in localStorage) {
          setCart(JSON.parse(localStorage.getItem('cart')));
        }
      }, []);
    

    function addToCart(product) {
        if (cart.some(item => item.id === product.id)) {
          const existingProduct = cart.filter(item => item.id === product.id);
          updateAmount(parseInt(existingProduct[0].amount) +1, product);
        }
        else {
          product["amount"] = 1
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

    function updateAmount(amount,product) {
      product.amount = amount;
      const index = cart.findIndex((item => item.id === product.id));
      const modifiedCart = Object.assign([...cart],{[index]:product});
      setCart(modifiedCart);
      localStorage.setItem('cart',JSON.stringify(modifiedCart));
    }

     function emptyCart() {
       setCart([]);
       localStorage.removeItem('cart');
     }
    
    return (
      <>
        <Navbar url={URL} cart={cart} setCategory={setCategory}/>
{/*           <Header search={search}/> */}
        <div id="content" className="container-fluid">
          <Switch>
            <Route path="/" render={() =>
                <Home
                  url={URL}
                  emptyCart={emptyCart}
                  category={category}
                />}
                exact
            />
            
            <Route path='/contact' component={Contact} />
            <Route path='/signup' component={SignUp} />
            <Route path='/register' component={Register} />
            <Route path='/admin' render={() => 
              <Admin
                url={URL}/>}
            />

            <Route path='/kahvi' render={() => 
              <Kahvi 
                emptyCart={emptyCart}
                category={category}
                addToCart={addToCart}/>}
              />

            <Route path='/tee' render={() => 
              <Tee
                emptyCart={emptyCart}
                category={category}
                addToCart={addToCart}/>}
              />

            <Route path='/muut' render={() => 
              <Muut
                emptyCart={emptyCart}
                category={category}
                addToCart={addToCart}/>}
              />

            <Route path='/product' render={() => 
              <Product
                url={URL}
                product={product}
                addToCart={addToCart}/>}
              />

            <Route path='/order' render={() => 
              <Order url={URL} 
                URL={URL}
                cart={cart}
                emptyCart={emptyCart}
                removeFromCart={removeFromCart}
                updateAmount={updateAmount}/>}
              /> 
          </Switch>
        </div>
        <Footer/> 
      </>
    )
}
 
