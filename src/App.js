import logo from './logo.svg';
import './App.css';
import './index.scss'

function App() {
  return (
    <div className="App">


      <ul>
        <li>启动项目：npm start</li>
        <li>启动 mock 服务：npm run server</li>
        <li>打包:npm run build</li>
        <li>安装服务： npm install -g serve</li>
        <li> 启动服务：serve -s build</li>
        <li>包体积分析-安装：npm i source-map-explorer</li>
        <li>包体积分析-命令： npm run analyze</li>
        <li></li>
        <li></li>
      </ul>

    </div>
  );
}

export default App;
