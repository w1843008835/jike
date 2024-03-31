import { Layout, Menu, Popconfirm } from 'antd'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import { Outlet, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const { Header, Sider } = Layout

const items = [
    {
        label: '首页',
        key: '/',
        icon: <HomeOutlined />,
    },
    {
        label: '文章管理',
        key: '/article',
        icon: <DiffOutlined />,
    },
    {
        label: '创建文章',
        key: '/publish',
        icon: <EditOutlined />,
    },
]

const GeekLayout = () => {
    const navigate = useNavigate()
    const onMenuClick = (route) => {
        navigate(route.key)
    }
    //反向高亮 根据路径设置菜单高亮
    const location = useLocation()
    const selectedKey = location.pathname
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <div className="user-info">
                    <span className="user-name">柴柴老师</span>
                    <span className="user-logout">
                        <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
                            <LogoutOutlined /> 退出
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        onClick={onMenuClick}
                        mode="inline"
                        theme="dark"
                        selectedKeys={selectedKey}
                        items={items}
                        style={{ height: '100%', borderRight: 0 }}></Menu>
                </Sider>
                <Layout className="layout-content" style={{ padding: 20 }}>
                    <Outlet />
                </Layout>
            </Layout>
        </Layout>
    )
}
export default GeekLayout