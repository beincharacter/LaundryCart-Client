import "./orders.css";

export default function Orders(props){

    const{data,washSelect,WashHandler} = props;

    function clickHandeler(e){
        
        WashHandler(e.target.dataset);
    }

    //    console.log(washSelect); 

    return<div className="order_list">
    <section className="product_container">
    <img className="order_list_logo" src={data.icon} alt="product logo"/>
    <h4 className="order_list_name" >{data.product_type}</h4>
    <dd className="order_list_description">{data.description}</dd>
    </section>

    <input className="order_list_quantity" type="number" min={0} defaultValue={0} />

    <section className="Wash_type_container" >

    <img 
    className="mechine_img"
    src={`./images/icon-for-createorder/washing-machine${washSelect[data.product_type]?.wash ? "-blue":""}.svg` }
    data-type = {data.product_type}
    data-price = {data.pricing.press}
    data-clicked = {"wash"}
    onClick={clickHandeler}
    alt="wash" 
    />

    <img 
    className="press_img" 
    src={`./images/icon-for-createorder/ironing${washSelect[data.product_type]?.press ? "-blue":""}.svg`}
    data-type = {data.product_type}
    data-price = {data.pricing.press}
    data-clicked = {"press"}
    onClick={clickHandeler}
    alt="press" 
    />
    <img 
    className="fold_img" 
    src={`./images/icon-for-createorder/towel${washSelect[data.product_type]?.fold ? "-blue":""}.svg`}
    data-type = {data.product_type}
    data-price = {data.pricing.press}
    data-clicked = {"fold"} 
    onClick={clickHandeler}
    alt="fold" 
    />
    <img 
    className="pack_img" 
    src={`./images/icon-for-createorder/bleach${washSelect[data.product_type]?.pack ? "-blue":""}.svg`}
    data-type = {data.product_type}
    data-price = {data.pricing.press}
    data-clicked = {"pack"}
    onClick={clickHandeler} 
    alt="pack" 
    />
    </section>

    <section className="price_container" >-</section>
    <div className="Reset_btn_holder">
    <button className="Reset_btn" >Reset</button>
    </div>

    </div>
}