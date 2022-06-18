import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useParams,Link} from 'react-router-dom'

function CategoryProduct() {
        const {catid} = useParams()

        const [products, setProducts] = useState([])
        const [categories, setCategories] = useState([])

        const getProductByCategory = () => {
                axios.get(`/api/product/category/${catid}`).then(res => {
                        setProducts(res.data.products);
                })
        }

        const getCategory = () => {
                axios.get('/api/categories').then(res => {
                  setCategories(res.data.categories);
                  console.log(res.data.categories);
                })
              }
              
              useEffect(() => {
                getCategory();
              },[]);
            

        useEffect(() => {
                getProductByCategory()       
        }, [catid])
  return (
        <div className="container">
        <div className="row">
          <div className="col-md-2">
            <center>
              <h4>Categories</h4>
            </center>

            <ul>
                {categories.map(cat => (
                  <li key={cat.id}><Link to={`/product/category/${cat.id}`}>{cat.name}</Link></li>

                ))}
              </ul>
     
          </div>
          <div className="col-md-10">
          <div className="card-group">


{products.length > 0   ? (<>

        {
products.map(single => (
  <div key={single.id} className="col-md-3">
    <div className="card">
        <img src={single.product_image} className="card-img-top" alt="..." height={'255px'} />
        <div className="card-body">
          <h5 className="card-title text-center">{single.product_title}</h5>
          <b>Prince</b> {single.product_price} Tk. <br/>
          <b>Categoty</b>  <br/>
        
        </div>
      </div>
</div>
))
}
</>) : (<div>
        <center> <h3 className='text-danger'>No Product Found !</h3> </center>
</div>)}
        





</div>
          </div>
        </div>
      </div>
  )
}

export default CategoryProduct