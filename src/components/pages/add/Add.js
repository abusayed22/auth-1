import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pre_add_product } from "../../../redux/action/action";


function Add() {
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([])

  const [product,setProduct] = useState({
    product_title:'',
    product_price:'',
    product_description:'',
    product_category:'',
    product_image:''
  })

  const getCategory = () => {
    axios.get('/api/categories').then(res => {
      setCategories(res.data.categories);
      console.log(res.data.categories);
    })
  }
  useEffect(() => {
    getCategory();
  },[]);

  const [category, setCategory] = useState(['shirt','pant','bag','doll']);
  const token = useSelector(state => state.auth.token);
  
  const saveProduct = () => {

    const formdata = new FormData();

    formdata.append('product_title',product.product_title);
    formdata.append('product_price',product.product_price);
    formdata.append('product_description',product.product_description);
    formdata.append('product_category',product.product_category);
    formdata.append('product_image',product.product_image);

    dispatch(pre_add_product(token,formdata))
    // console.log(formdata);


  }


  return (
    <div>
      <div className="container mt-5">
          <div className="col-md-6 offset-md-3">
            <h3>Add Product</h3>
        <form encType="multipart/form-data">
            <div className="form-group mb-6">
            <label>Product Title</label>

              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                placeholder="product-title"
                value={product.product_title}
                onChange={(e) => setProduct({...product,product_title:e.target.value})}
              />
            </div>

            <div className="form-group mt-2 mb-6">
              <label>Product Price</label>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                placeholder="product-price"
                value={product.product_price}
                onChange={(e) => setProduct({...product,product_price:e.target.value})}
              />
            </div>

            <div className="form-group mt-2 mb-6">
            <label>Product Description</label>

              Description...
             <textarea className="form-control" placeholder="Description..." value={product.product_description} onChange={((e) => setProduct({...product, product_description: e.target.value})  )} >
             </textarea>
            </div>

            <div className="form-group mt-2 mb-6">
            <label>Product Category</label>
              <select className="form-control" onChange={(e) => setProduct({...product, product_category: e.target.value})}>
                  <option value="">Select Category</option>
                   {categories.map(cat => (<option key={cat.id} value={cat.id}>{cat.name}</option>))}
                 
              </select>
            </div>

            <div className="form-group mt-2 mb-6 ">
            <label>Product Image</label>

              <input
                type="file"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                placeholder="product_image"
                onChange={(e) => setProduct({...product,product_image:e.target.files[0]})}
              />
            </div>

            <button onClick={saveProduct} type="button" className="mt-3 btn btn-secondary">Add product</button>
        </form>
          </div>
      </div>
    </div>
  );
}

export default Add;
