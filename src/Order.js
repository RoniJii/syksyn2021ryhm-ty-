import { useState, useEffect, createRef } from 'react';
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
    const [inputs, setInputs] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1)
    const cartlenght = Object.keys(cart).length;


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

    let sum = 0;

    function changeAmount(e,product) {
        updateAmount(e.target.value,product);
      }  


    useEffect(() => { //////////////ehkä turha
       
       for ( let i = 0;i<cartlenght; i++)
            inputs[i] = createRef();
    }, [cartlenght, inputs])

    useEffect(() => { //////////////ehkä turha
        if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex.current] !== null) {
            inputs[inputIndex].current.focus();
        }
    }, [cart, inputs, inputIndex])

    if(finished === false) {
    return (
        <div className='order'>
            <table>
                <tbody>
                    <th>Ostoskori</th>
                    {cart.map((product,index) => {
                    //  sum+=parseFloat(product.price);
                            return(
                                <tr key={uuidv4()}>
                                    <td>{product.name}</td>
                                    <td>{product.price} €</td>
                                    <td><input
                                        style={{width: '60px'}}
                                        type="number" step="1" min="1"
                                        onChange={e => changeAmount(e,product,index)}
                                        value={product.amount}/>
                                    </td> 
                                    <td><Link to="/#" onClick={() => removeFromCart(product)}>Delete</Link></td>
                                    <td><Link to="/#" onClick={() => emptyCart()}>Empty</Link></td>
                                </tr>
                            )
                    })}
                </tbody>
            </table>
            <>
            <h3>Client information</h3>
            <form onSubmit={order}>
                <div className='form-group'>
                    <label>First name: </label>
                    <input className='form-control' onChange={e => setFirstname(e.target.value)}></input>
                </div>

                <div className='form-group'>
                    <label>Last name: </label>
                    <input className='form-control' onChange={e => setLastname(e.target.value)}></input>
                </div>

                <div className='form-group'>
                    <label>Address: </label>
                    <input className='form-control' onChange={e => setAddress(e.target.value)}></input>
                </div>

                <div className='form-group'>
                    <label>Postal code: </label>
                    <input className='form-control' onChange={e => setZip(e.target.value)}></input>
                </div>

                <div className='form-group'>
                    <label>City: </label>
                    <input className='form-control' onChange={e => setCity(e.target.value)}></input>
                </div>

                <div className='buttons'>
                    <button className="btn btn-primary">Order</button>
                </div>
            </form>
            </>
        </div>
    )
    } 
    else {
        return (<h3 style={{'padding-top' : '100px' }}>Thank you for your order</h3>)
    }
}
