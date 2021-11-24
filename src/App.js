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
import Products from './components/pages/Products';
import Coffee from './components/pages/Coffee';
import Tea from './components/pages/Tea';
import Stuff from './components/pages/Stuff';


const URL = "http://localhost/syksynprojekti2021/";

export default function App() {

    const [category, setCategory] = useState(null);
/*     const [searchPhrase, setSeachPhrase] = useState(''); */
    const [cart, setCart] = useState([]); 
    const [product,setProduct] = useState(null);

    let location = useLocation();

    useEffect(() => {
        if (location.state !==undefined) {

          if (location.pathname==="/") {
            setCategory({id: location.state.id, name: location.state.name});



          } else if (location.pathname==="/products") {
            setProduct({id: location.state.id, name: location.state.name});

           
          }
            
        
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

    function updateAmount(amount, product) {
      product.amount = amount;
      const index = cart.findIndex((item => item.id === product.id));
      const modifiedCart = Object.assign([...cart], {[index]: product});
      setCart(modifiedCart);
      localStorage.setItem('cart',JSON.stringify(modifiedCart));
      }

    function emptyCart() {
      setCart([]);
      localStorage.setItem('cart', JSON.stringify([]));
    }
    
    return (
      <>
        <Navbar url={URL} cart={cart} setCategory={setCategory}/>
{/*           <Header search={search}/> */}
        <div id="content" className="container-fluid">
          <Switch>
            <Route
              path="/" render={() =>
                <Home
                  URL={URL}
                  emptyCart={emptyCart}
                  category={category}
                  addToCart={addToCart}
                />}
                exact
            />
            <Route
            path="/products"
            render= {()=>
            <Products
            URL={URL}
            product={product}
            addToCart= {addToCart}
            />
            }
            
            
            />

            <Route path='/products' component={Products} />
            <Route path='/contact' component={Contact} />
            <Route path='/signup' component={SignUp} />
            <Route path='/register' component={Register} />
            <Route path='/coffee' component={Coffee} />
            <Route path='/tea' component={Tea} />
            <Route path='/stuff' component={Stuff} />

            <Route path="/order" render={() => 
              <Order url={URL} 
                URL={URL}
                cart={cart}
               /*  empty={emptyCart} */
                removeFromCart={removeFromCart} />} 
              /> 
          </Switch>
        </div>
        <Footer/> 
      </>
    )
}
 
