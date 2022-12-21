import { useEffect, useState } from "react"
import axios from "axios";
import Orders from "./Orders/Orders";
// import { useNavigate } from "react-router-dom"
import "./createOrder.css";

export default function CreateOrder(){


    // const navigate = useNavigate();

    const [productData,setProductData] = useState([]);



    const WASHTEMPLET = {
        wash:false,
        press:false,
        fold: false,
        pack : false
    };

    const[washSelect,setWashSelect] = useState({});


    function WashHandler (dataset){
        // console.log(dataset);
        setWashSelect(pre=>{
            const select = {...pre}
            
            if(select[dataset.type] === undefined){
                // console.log(("enter for creation"));
                select[dataset.type] = {...WASHTEMPLET};
                select[dataset.type][dataset.clicked] = !select[dataset.type][dataset.clicked];
                
            }else if(select[dataset.type]){
                // console.log("found already");
                select[dataset.type][dataset.clicked] = !select[dataset.type][dataset.clicked];
                // console.log(select[dataset.type]);
                
                
            }
            
            return select;

        })
        
        console.log(washSelect);
    }
    
    
    useEffect(()=>{
      const url = "http://localhost:5000/product";
       async function FCall(){
         try{
            const response = await axios(url,{
                headers:{
                    authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzE2MzUyNjgsImRhdGEiOiI2M2ExNWQ2NTdlZTk0NmEyMGFmNTgwMmQiLCJpYXQiOjE2NzE2MzE2Njh9.9bhwvYP2Wr7ROn6jhMoeQOuelNu6WFhpBvQIbPLwi0g",
                }
            })
           console.log(response.data);
           setProductData(response.data);

         }
         catch(e){
            console.log(e.response.data);
            // navigate("/login");
         }
       }
       FCall(); 
    },[]);

    return<>
    <div id="title_holder">
        <h3 id="create_order_heading">Create order</h3>
        <input id="create_order_search" type="text" name="createOrderSearch" />
    </div>

    <div id="product_main_content" >
    <section >
        <section className="order_title" >
            <h3 className="product_titles">Product Types</h3>
            <h3 className="product_titles">Quantity</h3>
            <h3 className="product_titles">Wash Type</h3>
            <h3 className="product_titles">Price</h3>
            <h3 className="product_titles"> </h3>
        </section>
        { productData.length !== 0 && productData.map(data=>{
                const key = new Date().getTime() - (Math.random()*100).toString();
                return <Orders washSelect={washSelect} WashHandler={WashHandler} key ={key} data = {data} />

            })
            
        }
    </section>
    </div>
    <div id="proceed_btn_section">
        <button id="cancel_btn">Cancel</button>
        <button id="proceed_btn">Proceed</button>
    </div>

    </>
}