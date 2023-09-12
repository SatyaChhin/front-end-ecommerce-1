/* eslint-disable jsx-a11y/anchor-is-valid */
import { BiHomeHeart , BiCategory , BiUserCircle  } from 'react-icons/bi';
import {FaBolt} from 'react-icons/fa'
import { Outlet , useNavigate } from "react-router-dom"
import {RiDashboardLine}  from 'react-icons/ri'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Layout() { 
    const navigate = useNavigate()
    const clickLink = (Data) => {
        navigate(Data)
    }
    return(
        <Container>  
            <Row>
                <Col>
                    <nav className="Navbar">
                    <h2>Pov Saran</h2>
                        <ul>
                            <li onClick = { () => clickLink('/') }>
                                <a><BiHomeHeart /> Home</a>
                            </li>
                            <li onClick = { () => clickLink('/about') }>
                                <a><FaBolt/> Mobile</a>
                            </li>
                            <li onClick = { () => clickLink('/category') }>
                                <a><BiCategory/> TV & AV</a>
                            </li>
                            <li onClick = { () => clickLink('/customer') }>
                                <a><BiUserCircle/> Customer</a>
                            </li>
                            <li onClick = { () => clickLink('/login') }>
                                <a><RiDashboardLine/> Login</a>
                            </li>
                        </ul>
                    </nav>
                </Col>
                <Col>
                    <Outlet />
                </Col>
               <Col>
                    <div className="footer-dark">
                        <footer>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6 col-md-3 item">
                                        <h3>Services</h3>
                                        <ul>
                                            <li><a href="#">Web design</a></li>
                                            <li><a href="#">Development</a></li>
                                            <li><a href="#">Hosting</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 col-md-3 item">
                                        <h3>About</h3>
                                        <ul>
                                            <li><a href="#">Company</a></li>
                                            <li><a href="#">Team</a></li>
                                            <li><a href="#">Careers</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 item text">
                                        <h3>Company ProductShop</h3>
                                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                                    </div>
                                    <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                                </div>
                                <p className="copyright">Company Name © 2018</p>
                            </div>
                        </footer>
                    </div>
               </Col>
            </Row>
        </Container>
    )
}