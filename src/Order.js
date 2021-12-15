import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import './App.css';

export default function Order({url, cart, removeFromCart, updateAmount, emptyCart}) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");
    const [finished, setFinished] = useState(false);
    const [tilaus, setTilaus] = useState(false);
    const cartlenght = Object.keys(cart).length;
    let sum = 0;
    const [total, setTotal] = useState(0);

    function order(e) {
        e.preventDefault();
        fetch(url + 'add.php', {
            method: 'POST',
            header: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            }, 
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                address: address,
                zip : zip,
                city : city,
                cart : cart,
            })
        })
        .then (res => {
            return res.json();
        })
        .then(
            (res) => {
                emptyCart();
                setFinished(true);
            }, (error) => {
                alert(error);
            }
        )
    }

    
    useEffect(() => {
        for (let i = 0; i < cartlenght; i++) {
          sum += Number(cart[i].price) * Number(cart[i].amount)
        }
        setTotal(sum)
    }, [cart])

    
    function changeAmount(e,product) {
        updateAmount(e.target.value,product);
      }  


    if(finished === false) {
    return (
        <div className='cart'>    
            <div>   
                <div>
                    <h2>Ostoskori</h2>
                </div>      
                <table>
                    <tbody>
                        <tr>
                            <th>Tuote</th>
                            <th>Hinta</th>
                            <th> </th>
                            <th>Määrä</th>
                        </tr>
                        {cart.map((product,index) => {
                        return(
                            <tr key={uuidv4()}>
                                <td>{product.name}</td>   
                                <td>{product.price} €</td>
                                <td>
                                    <Link to="/#" onClick={() => removeFromCart(product)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </Link>
                                </td>                
                                <td><input
                                    style={{width: '50px'}}
                                    type="number" step="1" min="1"
                                    onChange={e => changeAmount(e,product,index)}
                                    value={product.amount}/>
                                </td> 
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className='order_submit'>
                    <span>Yhteensä: {total} €</span>
                    <div style={{'marginTop' : '10px'}}>
                        <Link to="/#">
                            <button className="btn" onClick={() => emptyCart()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </button>
                        </Link>
                        <button className="btn" style={{'marginLeft' : '10px'}} value={tilaus} onClick={() => setTilaus(true) + setFinished(true)}>
                            Seuraava {'>>'}
                        </button>
                    </div>  
                </div>                    
            </div>
        </div>
    )
    } if (tilaus === true) {
        return( 
            <>
            <div className='order'>
                    <form className='order_form' onSubmit={order}>
                        <h2 style={{'paddingTop' : '10px'}}>Toimitustiedot</h2>
                        <div className='form-group'>
                            <label>Etunimi: </label>
                            <input className='form-control' onChange={e => setFirstname(e.target.value)}></input>
                        </div>

                        <div className='form-group'>
                            <label>Sukunimi: </label>
                            <input className='form-control' onChange={e => setLastname(e.target.value)}></input>
                        </div>

                        <div className='form-group'>
                            <label>Osoite: </label>
                            <input className='form-control' onChange={e => setAddress(e.target.value)}></input>
                        </div>

                        <div className='form-group'>
                            <label>Postinumero: </label>
                            <input className='form-control' onChange={e => setZip(e.target.value)}></input>
                        </div>

                        <div className='form-group'>
                            <label>Kaupunki: </label>
                            <input className='form-control' onChange={e => setCity(e.target.value)}></input>
                        </div>

                        <div style={{'paddingTop' : '20px'}}>
                            <button className="btn" onClick={() => setTilaus(false) + setFinished(false)}> {'<<'} Taaksepäin</button>
                            <button style={{'marginLeft' : '10px'}} className="btn" onClick={() => setTilaus(false) + emptyCart()}>Tilaa</button>
                        </div>
                    </form>             
            </div>
            </>
        )
    }
    else {
        return (<h3 style={{'padding' : '311px' }}>Kiitos tilauksesta!</h3>)
    }
}
