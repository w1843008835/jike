import './index.scss'
import { Card, Form, Input, Button } from 'antd'

import logo from '@/assets/logo.png'
const Login = () => {
    const onFinish = (values) => {
        console.log(values)
    }
    return <div className='login'>
        <Card className='=login-container'>
            <img className='login-logo' src={logo} alt=''></img>
            <Form validateTrigger='onBlur' onFinish={onFinish}>
                <Form.Item
                    name="username"
                    rules={[{
                        required: true,
                        message: 'input your username'
                    },
                    {
                        pattern: /^1[3-9]\d{9}/,
                        message: '请输入正确的手机号'
                    }
                    ]}>
                    <Input size="large" placeholder="phone number"></Input>
                </Form.Item>
                <Form.Item name="password"
                    rules={[{
                        required: true,
                        message: 'input your password'
                    },
                    ]}>
                    <Input size="large" placeholder="password"></Input>
                </Form.Item>
                <Form.Item>
                    <Button size="primary" htmlType="submit" block>登录</Button>
                </Form.Item>
            </Form>

        </Card>

    </div >
}

export default Login