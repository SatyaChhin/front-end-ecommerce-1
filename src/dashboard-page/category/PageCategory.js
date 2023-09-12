import { useEffect,useState} from "react"
import { Table,Modal,Form, } from "react-bootstrap"
import { request } from '../../share/request'
import { formatDateClient , isPersmission } from '../../share/helper'
import { Space , Button } from "antd"
import SkeletonPage from "../../component/skeleton/SkeletonPage"

function CategoryPage(){
    const [show,setShow] = useState(false)
    const [showForm,setShowForm] = useState(false)
    const [list,setList] = useState([])
    const [item,setItem] = useState(null)
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [status,setStatus] = useState("")
    const [loading,setLoding] = useState(true)

    useEffect(()=>{
       setLoding(false)
       getList();
    },[])
    const getList = () =>{
        request("category","get").then(res=>{
            if(res){
                setList(res.list)
            }
        })
    }
    const onDelete = () => {
        setShow(false)
        var category_id = item.category_id
        request("category/"+category_id,"delete").then(res=>{
            var tmp_data = list.filter((item)=>item.category_id != category_id)
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
    }
    const onSave = () => {
        onHideModalForm()
        var param = {
            "name" : name,
            "description" : description,
            "parent_id" : null,
            "status" : status
        }
        var url = "category"
        var method = "post"
        // case update
        if(item != null){
            param.category_id = item.category_id // add new key "category_id" to param
            method = "PUT"
            url = `category/${param.category_id}`
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
        setStatus(item.status)
        setShowForm(true)
    }
    return(
        <div style={{padding:1}}>
            <div style={{padding:10,display:"flex",justifyContent:'space-between'}}>
                <div>Category</div>
                <div>
                    <Button variant="primary" onClick={onShowModalForm}>Add Category</Button>
                </div>
            </div>
            {loading ? <SkeletonPage/> :  
                <>
                    <Table striped bordered hover size='sm' responsive>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Create</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list?.map((item,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>                         
                                    <td>{formatDateClient(item.create_at)}</td>
                                    {/* eslint-disable-next-line eqeqeq */}
                                    { item.status == 1 ?  <td><Button size="sm" type="primary">Enable</Button></td> : <td><Button size="sm" type="primary" danger>Disable</Button></td> }
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
                </>
            }
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal  show={show} onHide={onHideModal}>
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
                <Modal  size="lg" show={showForm} onHide={onHideModalForm}>
                    <Modal.Header closeButton>
                        <Modal.Title>{item?.category_id == null ? "Create" : "Update"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    value={name} // state name
                                    type="input" 
                                    placeholder="name" 
                                    onChange={(event)=>{
                                        setName(event.target.value) // get value from user onchange => set value to name state
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                    value={description}
                                    as="textarea" 
                                    placeholder='Description'
                                    rows={3}
                                    onChange={(event)=>{
                                        setDescription(event.target.value)
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Status</Form.Label>
                                <Form.Control 
                                    value={status}
                                    type="input" 
                                    placeholder="Status" 
                                    onChange={(event)=>{
                                        setStatus(event.target.value)
                                    }}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHideModalForm}>Cancel</Button>
                        <Button variant="secondary" onClick={clearForm}>Clear</Button>
                        <Button variant="primary" onClick={onSave}>{(item?.category_id == null) ? "Save" : "Update"}</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default CategoryPage;