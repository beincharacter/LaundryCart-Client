import OrderNavBar from "../navbar/navbar";
import SideNavbar from "../sideNavbar/navbar";
import { useNavigate } from "react-router-dom"
import "./createOrder.css"
import { useEffect, useState } from "react";
import axios from "axios";
import Orders from "./Orders/Orders";
import Summary from "../Summary/summary";
import SuccessOrder from "./SuccessOrder/SuccessOrder";

export default function CreateOrder(){

    const navigate = useNavigate();
    const[success, setSuccess] = useState(false);
    function handleSucess(condition){
        setSuccess(condition);
    }
    const [summaryTg,setSummaryTg] = useState(false);

    function summaryHandler(condition){
        setSummaryTg(condition);
    }


    const [productData,setProductData] = useState([]);
    useEffect(()=>{
        const url = "http://localhost:5000/product";
         async function FCall(){
           try{
              const response = await axios(url,{
                  headers:{
                      authorization: localStorage.getItem('token'),
                  }
              })
             console.log(response.data);
             setProductData(response.data);
  
           }
           catch(e){
              console.log(e.response.data);
              navigate("/");
           }
         }
         FCall(); 
      },[navigate]);

    return<>
    <OrderNavBar/>
    <SideNavbar/>
    <div id="creat_order_cointainer">
    <div id="title_holder">
        <h3 id="create_order_heading">Create order</h3>
        <input id="create_order_search" type="text" name="createOrderSearch" />
    </div>
    <div id="product_main_content" >
        <div className="order_title" >
            <h3 className="product_titles">Product Types</h3>
            <h3 className="product_titles">Quantity</h3>
            <h3 className="product_titles">Wash Type</h3>
            <h3 className="product_titles">Price</h3>
            <h3 className="product_titles"> </h3>
        </div>
        { productData.length !== 0 && productData.map(data=>{
                const key = new Date().getTime() - (Math.random()*100).toString();
                return <Orders 
                key ={key} 
                data = {data} />

            })
            
        }

    </div>
    <div id="proceed_btn_section">
        <button id="cancel_btn">Cancel</button>
        <button onClick={()=>summaryHandler(true)} id="proceed_btn">Proceed</button>
    </div>
    </div>
    {summaryTg &&<div>
    <Summary 
        summaryHandler={summaryHandler}
        handleSucess={handleSucess}
        />
    </div>
    }
    {success &&
    <SuccessOrder/>
    }
        

    </>
}