import React from 'react'
import Cards from '../Cards';
import Karuselli from '../Karuselli';
import '../../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
//import { v4 as uuidv4 } from 'uuid';

///urlin tuonti ei toimi edelleenkään..

//const URL = "http://localhost/syksynprojekti2021/";

export default function Home({url, category}) {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        if (category !== null) {
            const address = ('http://localhost/syksynprojekti2021/products/getproducts.php/' + category.id);
            console.log(address)
            axios.get(address)
            .then((response) => {
                const json = response.data;
                setProducts(json);
            }).catch(error =>{
                if (error.response === undefined) {
                    alert(error);
                } else {
                    alert(error.response.data.error);
                }
            })
        }
    }, [category, url])

    return (
        <div className='container-fluid' style={{marginTop: '100px'}}>
            <Karuselli/>
            <Cards/>
        </div>
    )
}