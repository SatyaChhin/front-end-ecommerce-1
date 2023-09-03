/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet } from "react-router-dom"
import { Col, Row } from 'antd';
import Container from 'react-bootstrap/Container';
export default function LayoutPage() { 
    const restyle = {
        color: "white",
        fontFamily: "Arial",
        margin: "auto",
        paddingTop : "50px"
    };
    return(
        <div style={restyle}>  
            <Container>
                <Row xs={2} md={4} lg={6}>
                    <Col style={restyle}><Outlet /></Col>
                </Row>
            </Container>
        </div>
    )
}



