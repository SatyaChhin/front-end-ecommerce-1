import { useEffect,useState} from "react"
import { Table,Modal,Form, } from "react-bootstrap"
import { config, request } from '../../share/request'
import { formatDateClient , isPersmission } from '../../share/helper'
import { Space , Button ,   } from "antd"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function ProductPage(){
    const [show,setShow] = useState(false)
    const [showForm,setShowForm] = useState(false)
    const [list,setList] = useState([])
    const [item,setItem] = useState(null)
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [status,setStatus] = useState("")
    const [category,setCategory] = useState("")
    const [barcode,setBarcode] = useState("")
    const [rating,setRating] = useState("")
    const [quantity,setQuantity] = useState("")
    const [price,setPrice] = useState("")
    const [product_type,setProductType] = useState("")

    useEffect(()=>{
       getList();
    },[])
    const getList = () =>{
        request("product","get").then(res=>{
            if(res){
                setList(res.list)
            }
        })
    }
    const onDelete = () => {
        setShow(false)
        var product_id = item.product_id
        request("product/"+ product_id,"delete").then(res=>{
            var tmp_data = list.filter((item)=>item.product_id != product_id)
            setList(tmp_data)
        })
    }
    
    const onClickBtnDelete = (param) => {
        setItem(param)
        setShow(true)
    }

    const onHideModal = () => {
        setShow(false)
        setItem(null)
    }

    const onHideModalForm = () => {
        setShowForm(false)
        setItem(null)
        clearForm()
    }

    const clearForm = () => {
        setName("")
        setDescription("")
        setStatus("")
        setCategory("")
        setBarcode("")
        setRating("")
        setQuantity("")
        setProductType("")
        setPrice("")
    }
    const onSave = () => {
        onHideModalForm()
        var param = {
            "name" : name,
            "description" : description,
            "parent_id" : null,
            "status" : status,
            "category_id" : category,
            "barcode" : barcode,
            "star_rating" : rating,
            "quantity" : quantity,
            "price" : price,
            "product_type" : product_type
        }
        var url = "product"
        var method = "post"
        // case update
        if(item != null){
            param.product_id = item.product_id // add new key "product_id" to param
            method = "PUT"
            url = `product/${param.product_id}`
        }
        request(url,method,param).then(res=>{
            if(res){
                getList();
                clearForm()
            } 
        })
    }
    const onShowModalForm = () => {
        setShowForm(true)
    }

    const onClickEdit = (item) => {
        setItem(item)
        setName(item.name)
        setDescription(item.description)
        setCategory(item.category_id)
        setStatus(item.status)
        setBarcode(item.barcode)
        setRating(item.star_rating)
        setQuantity(item.quantity)
        setPrice(item.price)
        setProductType(item.product_type)
        setShowForm(true)
    }
    return(
        <div style={{padding:1 , textAlign:"center"}}>
            <div style={{padding:10,display:"flex",justifyContent:'space-between'}}>
                <div>Product</div>
                <div>
                    <Button variant="primary" onClick={onShowModalForm}>Add Product</Button>
                </div>
            </div>
           <Table striped bordered hover size='sm' responsive>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>product_id</th>
                    <th>Barcode</th>
                    <th>Star_rating</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Create_at</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list?.map((item , index)=>{
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>
                                <img style={{width:50,height:50}} src= {config.base_server +'/'+ item.image}  alt={item.image}/>
                            </td>
                            <td>{item.product_id}</td>
                            <td>{item.barcode}</td>
                            <td>{item.star_rating}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{item.product_type}</td>        
                            <td style={{textAlign:"left"}}>{item.description}</td>
                            <td>{formatDateClient(item.create_at)}</td>
                            <td>
                                <Space>
                                    {<Button size="sm" disabled={!isPersmission("product.Update")}  onClick={()=>onClickEdit(item)} variant="primary" primary>Edit</Button>}
                                    {<Button size="sm" onClick={()=>onClickBtnDelete(item)} variant="danger" danger>Delete</Button> }
                                </Space>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
           </Table >
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal show={show} onHide={onHideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure to remove?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHideModal}>No</Button>
                        <Button variant="primary" onClick={onDelete}>Yes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Block modal form insert/update */}
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal size="xl" show={showForm} onHide={onHideModalForm}>
                    <Modal.Header closeButton>
                        <Modal.Title>{item?.product_id == null ? "Create" : "Update"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                    <Row>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    value={name} // state name
                                    type="input" 
                                    onChange={(event)=>{
                                        setName(event.target.value) // get value from user onchange => set value to name state
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Category</Form.Label>
                                <Form.Control 
                                    value={category}
                                    type="input" 
                                    onChange={(event)=>{
                                        setCategory(event.target.value)
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Barcode</Form.Label>
                                <Form.Control 
                                    value={barcode}
                                    type="input" 
                                    onChange={(event)=>{
                                        setBarcode(event.target.value)
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control 
                                    value={rating}
                                    type="input" 
                                    onChange={(event)=>{
                                        setRating(event.target.value)
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control 
                                    value={quantity}
                                    type="input" 
                                    onChange={(event)=>{
                                        setQuantity(event.target.value)
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Price</Form.Label>
                                <Form.Control 
                                    value={price}
                                    type="input" 
                                    onChange={(event)=>{
                                        setPrice(event.target.value)
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Product type</Form.Label>
                                <Form.Control 
                                    value={product_type}
                                    type="input" 
                                    onChange={(event)=>{
                                        setProductType(event.target.value)
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Status</Form.Label>
                                <Form.Control 
                                    value={status}
                                    type="input" 
                                    onChange={(event)=>{
                                        setStatus(event.target.value)
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={12}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                    value={description}
                                    as="textarea" 
                                    rows={3}
                                    onChange={(event)=>{
                                        setDescription(event.target.value)
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHideModalForm}>Cancel</Button>
                        <Button variant="secondary" onClick={clearForm}>Clear</Button>
                        <Button variant="primary" onClick={onSave}>{(item?.product_id == null) ? "Save" : "Update"}</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}
export default ProductPage;