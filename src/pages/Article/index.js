import { Link, useNavigate } from 'react-router-dom'
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Table, Tag, Space, Popconfirm } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import img404 from '@/assets/error.png'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useChanel } from '@/hooks/useChanel'
import { useEffect, useState } from 'react'
import { delArticleAPI, getArticleListAPI } from '@/apis/article'

const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {
    const navigate = useNavigate()
    const status = {
        1: <Tag color='warning'>待审核</Tag>,
        2: <Tag color='success'>审核通过</Tag>
    }
    const { chanelList } = useChanel()
    // 准备列数据
    const columns = [
        {
            title: '封面',
            dataIndex: 'cover',
            width: 120,
            render: cover => {
                return <img src={cover.images[0] || img404} width={80} height={60} alt="" />
            }
        },
        {
            title: '标题',
            dataIndex: 'title',
            width: 220
        },
        {
            title: '状态',
            dataIndex: 'status',
            //render: data => <Tag color="green">审核通过</Tag>
            render: data => status[data]
        },
        {
            title: '发布时间',
            dataIndex: 'pubdate'
        },
        {
            title: '阅读数',
            dataIndex: 'read_count'
        },
        {
            title: '评论数',
            dataIndex: 'comment_count'
        },
        {
            title: '点赞数',
            dataIndex: 'like_count'
        },
        {
            title: '操作',
            render: data => {
                return (
                    <Space size="middle">
                        <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={() => { navigate(`/publish?id=${data.id}`) }} />
                        <Popconfirm
                            title="delete the task"
                            description="are you sure to delete?"
                            onConfirm={() => onConfirm(data)}

                            okText="Yes"
                            cancleText="No"
                        ><Button
                                type="primary"
                                danger
                                shape="circle"
                                icon={<DeleteOutlined />}
                            /></Popconfirm>

                    </Space>
                )
            }
        }
    ]
    //筛选功能
    const [reqData, setReqData] = useState({
        status: '',
        chanel_id: '',
        begin_pubdate: '',
        end_pubdate: '',
        page: '',
        per_page: ''

    })
    //获取文章列表 
    //当reqData依赖项发生变化时，重复执行数据拉取动作
    const [list, setList] = useState([])
    useEffect(() => {
        async function getlist() {
            const res = await getArticleListAPI(reqData)
            setList(res)

        }
        getlist()
    }, [reqData])

    const onFinish = (val) => {
        setReqData({
            ...reqData,
            status: val.status,
            // chanel_id: val.chanel_id,
            //begin_pubdate: val.date[0].format('YYYY-MM-DD'),
            //end_pubdate: val.date[1].format('YYYY-MM-DD'),

        })
    }
    const onConfirm = async (data) => {
        await delArticleAPI(data.id)
        setReqData({
            ...reqData
        })
    }
    return (
        <div>
            <Card
                title={
                    <Breadcrumb items={[
                        { title: <Link to={'/'}>首页</Link> },
                        { title: '文章列表' },
                    ]} />
                }
                style={{ marginBottom: 20 }}
            >
                <Form initialValues={{ status: '' }} onFinish={onFinish}>
                    <Form.Item label="状态" name="status">
                        <Radio.Group>
                            <Radio value={''}>全部</Radio>
                            <Radio value={0}>草稿</Radio>
                            <Radio value={2}>审核通过</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="频道" name="channel_id">
                        <Select
                            placeholder="请选择文章频道"
                            defaultValue="lucy"
                            style={{ width: 120 }}

                        >
                            {chanelList.map(item => <Option key={item.name} value={item.id}>{item.name}</Option>)}

                        </Select>
                    </Form.Item>

                    <Form.Item label="日期" name="date">
                        {/* 传入locale属性 控制中文显示*/}
                        <RangePicker locale={locale}></RangePicker>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
                            筛选
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            <Card title={`根据筛选条件共查询到 ${list.length} 条结果：`}>
                <Table rowKey="id" columns={columns} dataSource={list} pagination={{
                    total: list.length,
                    pageSize: 2,

                }} />
            </Card>
        </div>
    )
}

export default Article