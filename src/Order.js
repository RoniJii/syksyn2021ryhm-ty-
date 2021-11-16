import {useState, useEffect, createRef} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

export default function Order({url, category, cart, removeFromCart, updateAmount}) {
    //const [firstname, setFirstname] = useState("");
    //const [lastname, setLastname] = useState("");
    //const [address, setAddress] = useState("");
    //const [zip, setZip] = useState("");
    //const [city, setCity] = useState("");
    //const [finished, setFinished] = useState(false);
    const [inputs, setInputs] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1)


    function changeAmount(e,product,index) {
        updateAmount(e.target.value,product);
        setInputIndex(index);
    }

    useEffect(() => {
       for ( let i = 0;i<cart.lenght; i++)
            inputs[i] = createRef();
    }, [cart.lenght, inputs])

    useEffect(() => {
        if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex.current] !== null) {
            inputs[inputIndex].current.focus();
        }
    }, [cart, inputs, inputIndex])
    return (
    
        <div style={{marginTop: '160px'}}>
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
                                value={product.amount}/></td>
                            <td><Link to="/#" onClick={() => removeFromCart(product)}>Delete</Link></td>
                        </tr>
                    )
            })}
{/*             <tr key={uuidv4()}>
                <td className="sumrow"></td>
                <td className="sumrow">{sum.toFixed(2)}€</td>
                <td className="sumrow"></td>
                <td className="sumrow"></td>
                <td className="sumrow"></td>
            </tr> */}
        </div>
    )
}
