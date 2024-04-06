import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link, createRoutesFromChildren } from 'react-router-dom'
import './index.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useEffect, useState } from 'react'
import { createArticleAPI, getChanelApi } from '@/apis/article'

const { Option } = Select


const Publish = () => {
    //获取频道列表
    const [chanelList, setChanelList] = useState([])
    useEffect(() => {
        const getChanelList = async () => {
            const res = await getChanelApi()
            setChanelList(res)
        }
        getChanelList()
    }, []);
    const onFinish = async (values) => {
        console.log(values)
        const { title, content, chanel_id } = values
        const reqData = {
            title,
            content,
            cover: {
                type: 0,
                images: []
            }, chanel_id
        }
        createArticleAPI(reqData)
    }
    const [imageList, setImageList] = useState([])
    const onChange = (values) => {
        console.log("upload")
        setImageList(values, fileList)
    }
    return (
        <div className="publish">
            <Card
                title={
                    <Breadcrumb items={[
                        { title: <Link to={'/'}>首页</Link> },
                        { title: '发布文章' },
                    ]}
                    />
                }
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ type: 1 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="标题"
                        name="title"
                        rules={[{ required: true, message: '请输入文章标题' }]}
                    >
                        <Input placeholder="请输入文章标题" style={{ width: 400 }} />
                    </Form.Item>
                    <Form.Item
                        label="频道"
                        name="channel_id"
                        rules={[{ required: true, message: '请选择文章频道' }]}
                    >
                        <Select placeholder="请选择文章频道" style={{ width: 400 }}>
                            {chanelList.map(item => <Option key={item.idi} value={item.id}>{item.name}</Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item label="封面">
                        <Form.Item name="type">
                            <Radio.Group>
                                <Radio value={1}>单图</Radio>
                                <Radio value={3}>三图</Radio>
                                <Radio value={0}>无图</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Upload
                            listType="picture-card"
                            showUploadList
                            action={'http://localhost:3000/uploaded'}
                            name='image'
                            onChange={onChange}
                        >
                            <div style={{ marginTop: 8 }}>
                                <PlusOutlined />
                            </div>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        label="内容"
                        name="content"
                        rules={[{ required: true, message: '请输入文章内容' }]}
                    >
                        {/**副文本编辑器 */}
                        <ReactQuill className='publish-quil' theme='snow' placeholder='请输入内容'>


                        </ReactQuill>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Space>
                            <Button size="large" type="primary" htmlType="submit">
                                发布文章
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div >
    )
}

export default Publish