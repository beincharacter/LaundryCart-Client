import React, { useState , useEffect} from "react";
import SideNavbar from "./sideNavbar/navbar";
import "./mainOrderDashboard.css"
import OrderNavBar from "./navbar/navbar";
import CancelOrder from "./cancel-order/cancelOrder";
import FooterOrder from "./footer/footer";
import {Link,useNavigate} from "react-router-dom";

const OrderMain = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    }, [])
    // let ordersDetail = [];
    let ordersDetail = [{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"},{location: "Ludhiana"}];

    const [cancelDisplay, setCancelDisplay] = useState("none")
    // const [cancelDisplay, setCancelDisplay] = useState("none")



    
    return (
        <>
        <OrderNavBar/>
            <div className="orders-container">
                <SideNavbar/>
                <div className="orders-top-bar">
                    {
                        ordersDetail.length === 0 ? 
                        <>
                        <span className="orders-num"><b>Orders | {ordersDetail.length}</b></span>
                        <span><input type="text" className="search-bar"></input><i className="search-icon fa fa-search"></i></span>
                        </> :
                        <>
                            <span className="orders-num"><b>Orders | {ordersDetail.length}</b></span>
                            <span><Link to={"/createorder"}><button className="some-create-btn">Create</button></Link></span>
                            <span><input type="text" className="search-bar"></input><i className="search-icon fa fa-search"></i></span>
                        </>
                    }                    
                </div>

                {/* Mian Page Design */}

                {
                    ordersDetail.length === 0 ? 
                    <>
                        <div className="zero-order-page-main">
                    <p>No Order Available</p>
                    <Link to={"/createorder"}><button className="create-btn">Create</button></Link>
                </div>
                    </> :
                    <>
                <div className="some-order-page-main">
                    <table>
                        <thead className="table-header" style={{backgroundColor: 'rgb(56,55,55)'}} >
                            <tr>
                                <td>OrderId</td>
                                <td >Order Date</td>
                                <td > Store Location</td>
                                <td>City</td>
                                <td>Store Phone</td>
                                <td>Total Item</td>
                                <td>Price</td>
                                <td>Status</td>
                                <td>      </td>
                                <td>View</td>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                        {ordersDetail.map((data, i) => {
                            return (
                                    <tr className="table-body" key={i}>
                                        <td>{data.ordId}</td>
                                        <td>{data.Date}</td>
                                        <td>{data.location}</td>
                                        <td>{data.city}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.items}</td>
                                        <td>{data.items * 5} </td>
                                        <td>{data.status}</td>
                                        <td className="cancel-order" onClick={() => setCancelDisplay("block")}>Cancel Order</td>
                                        <td className="view-details"><i className="fa-solid fa-eye"></i></td>
                                    </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>

                    </>
                }

                <CancelOrder display={cancelDisplay}  setCancelDisplay={setCancelDisplay}/>

                
                
            </div>
            <FooterOrder/>
        </>
    )
}

export default OrderMain;