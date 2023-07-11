/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link , Outlet } from "react-router-dom"
export default function LayoutDashboard() { 
    return(
        <>      
           <div className="menu-dashboard">
                <div className="logo">
                    <img className="log-img"
                        src={window.urlImg} alt=""
                    />
                    <span className="logo_name">IT cambodia</span>
                </div>
                <div className="data_menu">
                    <ul>
                        <li >
                            <Link to="product">product</Link>
                        </li>
                        <li>
                            <Link to="category">category</Link>
                        </li>
                        <li>                       
                            <Link to="cart">cart</Link>
                        </li>
                        <li>
                            <Link to="customer">customer</Link>
                        </li>
                        <li>
                            <Link to="/">website</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet /> 
            {/* <div className="display">
                <Outlet /> 
            </div> */}
        </>
    )
}