import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import ProductRow from './ProductRow/ProductRow';
import { useLocation } from 'react-router-dom';


const ProductList = () => {
    const [products, setProducts] = useState([]);    
    const location = useLocation();


    useEffect(() => {
        axios.get('https://salty-hollows-81337.herokuapp.com/products')
            .then(res => {
                setProducts(res.data);
            })
    }, []);

    const handleDeleteProduct = (id)=>{
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            const url = `https://salty-hollows-81337.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProducts = products.filter(products => products._id !== id);
                        setProducts(remainingProducts);
                    }
                });
        }
    }
    return (
        <>
        {/* <ExtraBanner bannerText={"Manage Products"}></ExtraBanner>      */}
        <div className="container-fluid">
            <div className ="d-flex justify-content-between">
                <h2 className="text-dark my-5">Products table</h2>
                <NavLink to="add-products" className="btn my-auto bg-tripo text-white">Add new product</NavLink>
                </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm text-center">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Product Title</th>
                            {/* <th scope="col">Description</th> */}
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            products?.map((product,i)=> <ProductRow
                                key={product._id}
                                product={product}  serial={i+1} handleDeleteProduct={handleDeleteProduct}
                                currentPage={location.pathname}></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>       
        </>
    );
};

export default ProductList;