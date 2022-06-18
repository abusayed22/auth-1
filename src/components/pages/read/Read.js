import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pre_get_data } from "../../../redux/action/action";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [categories, setCategories] = useState([])


  const products = useSelector((state) => state.crud.products);
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
    dispatch(pre_get_data(token));
  }, []);
  return (
    <div>
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

 


  </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Read;
