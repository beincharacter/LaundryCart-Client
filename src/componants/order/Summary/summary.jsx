import"./summary.css";

export default function Summary(props){

    
    const{summaryHandler,handleSucess} = props;
    return<div id="summary_holder">
        <div id="summary_page">
        <div id="summary_header">
        <h3>Summary</h3>
        <i className="fa-solid fa-xmark " onClick={() => summaryHandler(false)} ></i>
        </div>
        <div className="store_addrs">
            <select>
                <option>Jp Nagar</option>
            </select>
            <dl>
                <dt><b>Store Address:</b></dt>
                <dd>Near Phone booth, 10th road</dd>
            </dl>
            <dl>
                <dt><b>Phone:</b></dt>
                <dd>91 9999999999</dd>
            </dl>
        </div>
        <div className="order_details">
            <p>Order Details</p>
            <div>render the orderlist</div>
            <p className="summary_sub_total">Sub total: </p>
            <p className="summary_pickup">Pickup Charges:  90</p>
            <div className="total_price">Total : RS </div>
        </div>
        <div >
            <p className="address_title">Adderss</p>
            <div className="address_container">
            <address>
                <p><b>Home</b></p>
                <p>#223, 10th road, Jp Nagar, Bangalore</p>
            </address>
            <address>
                <p><b>Other</b></p>
                <p>#223, 10th road, Jp Nagar, Bangalore</p>
            </address>
            <button className="address_btn">
            ADD NEW
            </button>
            </div>
        </div>
        
        <button className="summary_confirm" onClick={()=>{handleSucess(true);summaryHandler(false)}}  >Confirm</button>
        
    </div>
    </div>
}