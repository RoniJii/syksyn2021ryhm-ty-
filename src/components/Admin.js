import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

//const url = "http://localhost/syksynprojekti2021/";

export default function Admin({url}) {

    const [all, setAll] = useState([]);
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [categoryid, setCategoryId] = useState("")
    const [category, setCategory] = useState("")

    useEffect(() => {
        axios.get(url) 
            .then((response) => {
                setAll(response.data)
            }).catch(error => {
                alert(error.response ? error.response.data.error : error)
            })
        }, [url])

    function newitem(e) {
        e.preventDefault();
        const combined = {name:name, price:price, image:image, category:categoryid}
        console.log(combined)
        const json = JSON.stringify(combined)
        axios.post(url + 'addproduct.php', json, {
            headers: {
                'Content-Type' : 'application/json'
             }
        }).then ((response) => {
            setAll(all => [...all, response.data])
            setName('')
            setPrice('')
            setImage('')
            setCategoryId('')
        }).catch (error => {
            alert(error.response.data.error)
        })
    }

    
    function newcategory(e) {
        e.preventDefault(); 
        const json = JSON.stringify({category:category})
        console.log(json)
        axios.post(url + 'addcategory.php', json, {
            headers: {
                'Content-Type' : 'application/json'
             }
        }).then ((response) => {
            setAll(all => [...all, response.data])
            setCategory('')
        }).catch (error => {
            alert(error.response.data.error)
        })
    }

    return (
        <div>
            <form className='form-container'>
                <div className='admin-panel' style={{marginTop: '100px'}}>
                <h4>Uusi tuote</h4>
                <input className='form-field' value={name} placeholder="tuotenimi" onChange={e => setName(e.target.value)} />
                <input className='form-field' value={price}  placeholder="hinta" onChange={e => setPrice(e.target.value)} />
                <input className='form-field' value={image} placeholder="tuotekuva" onChange={e => setImage(e.target.value)} />
                <input className='form-field' value={categoryid}  placeholder="tuoteryhmänimi" onChange={e => setCategoryId(e.target.value)} />
                <button className='form-field' onClick={newitem}>Lisää</button>
                </div>

                <div className='admin-panel' style={{marginTop: '10px'}}>
                <h4>Uusi tuoteryhmä</h4>
                <input className='form-field' value={category}  placeholder="tuoteryhmänimi" onChange={e => setCategory(e.target.value)} />
                <button className='form-field' onClick={newcategory}>Lisää</button>
                </div>
            </form>
        </div>
    )
}
