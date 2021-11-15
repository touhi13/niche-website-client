import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://salty-hollows-81337.herokuapp.com/products')
            .then(res => {
                setProducts(res.data);
                console.log(res.data);
            })
    }, []);
    return (
        <section className="py-1">
            <div className="container px-4 px-lg-5 mt-5">
                <h3 className="text-center product-heading mb-5">Featured Products</h3>
                <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;