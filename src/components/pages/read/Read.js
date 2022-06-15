import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pre_get_data } from "../../../redux/action/action";

function Read() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const products = useSelector((state) => state.crud.products);

  useEffect(() => {
    dispatch(pre_get_data(token));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="card-group">

          
        {
          products.map(single => (
            <div key={single.id} className="col-md-3">
              <div className="card">
                  <img src={single.product_image} className="card-img-top" alt="..." height={'255px'} />
                  <div className="card-body">
                    <h5 className="card-title text-center">{single.product_title}</h5>
                    <b>Prince</b> {single.product_price} Tk. <br/>
                    <b>Categoty</b> {single.product_category} Tk. <br/>
                  
                  </div>
                </div>
          </div>
          ))
        }

         


          </div>
        </div>
    </div>
  );
}

export default Read;
