import { Button , Form, Input , Card  , message } from 'antd';
import { request } from '../../share/request';
const onFinish = (values) => {
  var param = {
    "username" : values.username,
    "password" : values.password
  }
  request("employee/login","post",param).then(res=>{
        if(!res.error){
            console.log(res)
            localStorage.setItem("access_token" , res.access_token)
            localStorage.setItem("refresh_token" , res.refresh_token)
            localStorage.setItem("user" , JSON.stringify(res.user))
            localStorage.setItem("permission" , JSON.stringify(res.permission))
            window.location.href = ('/dashboard')
        }else{
            message.error(res.message)
        }  
  })
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const loginPage = () => {
    return (
        <Card title="Form Login" bordered={false} style={{ width: 500 , backgroundColor : "#FEFCFF" }}>
            <Form
                name="basic"
                labelCol={{span: 5,}}
                wrapperCol={{span: 20,}}
                style={{maxWidth: 600,}}
                initialValues={{remember: true,}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
                        },
                    ]}
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                >
                <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 20, span: 16,}}
                >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}
export default loginPage;