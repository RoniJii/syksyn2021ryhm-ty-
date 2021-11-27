import {useEffect, useState} from 'react'
import axios from 'axios'

const url = "http://localhost/syksynprojekti2021/"

export default function Admin() {

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
        }, [])

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
        axios.post(url + 'add.php', json, {
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
            <form>
                <div style={{marginTop: '150px'}}>
                <label>New item</label>
                <input value={name} placeholder="type name" onChange={e => setName(e.target.value)} />
                <input value={price}  placeholder="type price" onChange={e => setPrice(e.target.value)} />
                <input value={image} placeholder="type image" onChange={e => setImage(e.target.value)} />
                <input value={categoryid}  placeholder="type category" onChange={e => setCategoryId(e.target.value)} />
                <button onClick={newitem}>Add</button>
                </div>

                <div style={{marginTop: '10px'}}>
                <label>New category</label>
                <input value={category}  placeholder="type categery name" onChange={e => setCategory(e.target.value)} />
                <button onClick={newcategory}>Add</button>
                </div>
            </form>
        </div>
    )
}
