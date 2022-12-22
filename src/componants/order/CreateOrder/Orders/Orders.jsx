import { useState } from "react";
import "./orders.css";

export default function Orders(props){

    const{data} = props;


    







    return<div className="order_list">
    <div className="product_container">
    <img className="order_list_logo" src={data.icon} alt="product logo"/>
    <h4 className="order_list_name" >{data.product_type}</h4>
    <dd className="order_list_description">{data.description}</dd>
    </div>

    <input 
    className="order_list_quantity" 
    type="number"
    data-type = {data.product_type}
    data-clicked = {"quantity"}
   
    min={0} 
    defaultValue={0} />

    <div className="Wash_type_container" >

    <img 
    className="mechine_img"
    src={`./images/icon-for-createorder/washing-machine.svg` }
    data-type = {data.product_type}
    data-price = {data.pricing.press}
    data-clicked = {"wash"}
  
    alt="wash" 
    />

    <img 
    className="press_img" 
    src={`./images/icon-for-createorder/ironing.svg`}
    data-type = {data.product_type}
    data-price = {data.pricing.press}
    data-clicked = {"press"}

    alt="press" 
    />
    <img 
    className="fold_img" 
    src={`./images/icon-for-createorder/towel.svg`}
    data-type = {data.product_type}
    data-price = {data.pricing.press}
    data-clicked = {"fold"} 

    alt="fold" 
    />
    <img 
    className="pack_img" 
    src={`./images/icon-for-createorder/bleach.svg`}
    data-type = {data.product_type}
    data-price = {data.pricing.press}
    data-clicked = {"pack"}
  
    alt="pack" 
    />
    </div>

    <div className="price_container" >-</div>
    <div className="Reset_btn_holder">
    <button className="Reset_btn" >Reset</button>
    </div>

    </div>
}