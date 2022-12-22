import { useState } from "react";
import { json } from "react-router-dom";
import CancelOrder from "../cancel-order/cancelOrder";
import "./summary-cancel.css";

export default function Summary(props) {

  const [cancelDisplay, setCancelDisplay] = useState("none");
  const dataDetail = props.summaryData;
  const orders = dataDetail.orders;
  console.log(orders);

  const call = () => {
    props.setSummaryDisplay("none")
    setCancelDisplay("block");
  }

  let summaryVisibility = false;
  

  return(
    <>
  <div id="summary_holder" style={{ display: props.summaryDisplay }}>
    <div id="summary_page">
      <div id="summary_header">
        <h3>Summary</h3>
        <i className="fa-solid fa-xmark " onClick={() => props.setSummaryDisplay("none")}></i>
      </div>
      
      <div className="store_addrs">
        <select>
          <option>Jp Nagar</option>
        </select>
        <dl>
          <dt>
            <b>Store Address:</b>
          </dt>
          <dd>Near Phone booth, 10th road</dd>
        </dl>
        <dl>
          <dt>
            <b>Phone:</b>
          </dt>
          <dd>91 9999999999</dd>
        </dl>
      </div>
      <div className="order_details">
        <p style={{paddingLeft: "4%"}}>Order Details</p>
        <table>
        { props.visibility && orders.map((order, i) => {
            return (
                <>
                    <tr key={i}>
                        <td style={{width: "45%"}}>{order.product_type}</td>
                        <td style={{width: "60%"}}>{order.wash_type}</td>
                        <td>{order.price}</td>
                    </tr>
                </>
            )
        })}
        </table>
        <p className="summary_sub_total" style={{paddingRight: "3%"}}>Sub total: </p>
        <p className="summary_pickup" style={{paddingRight: "3%"}}>Pickup Charges: 90</p>
        <div className="total_price" style={{paddingRight: "3%"}}>Total :  Rs. {dataDetail.total_price} </div>
      </div>
      <div>
        <p className="address_title">Adderss</p>
        <div className="address_container">
          <address>
            <p>
              <b>Home</b>
            </p>
            <p>#223, 10th road, Jp Nagar, Bangalore</p>
          </address>
          <address>
            <p>
              <b>Other</b>
            </p>
            <p>#223, 10th road, Jp Nagar, Bangalore</p>
          </address>
          <button className="address_btn">ADD NEW</button>
        </div>
      </div>

      <button className="summary_confirm"  onClick={() => call()}>Cancel</button>
      
    </div>
  </div>
      <CancelOrder display={cancelDisplay}  setCancelDisplay={setCancelDisplay} orderId={props.orderId} ordersDetail={props.ordersDetail} setOrderDetail={props.setOrderDetail}/>

  </>
  )
}
