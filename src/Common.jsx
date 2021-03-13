import React from "react";
import header from "../src/images/header.png";
import {NavLink} from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name} 
                    <strong className="brand-name"> Atul Patle</strong>
                  </h1>
                  <h2 className="my-3"> i am web a Developer </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 order-1 order-lg-2 header-img mt-5">
                  <img
                    src={props.imgsrc}
                    alt="side image"
                    className="img-fluid animated "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
