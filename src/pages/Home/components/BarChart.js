import * as echarts from 'echarts'
import { useEffect, useRef } from 'react';


const BarChart = ({ title }) => {
    const chartRef = useRef(null)
    //保证dom可用再进行渲染
    useEffect(() => {
        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);


        const option = {
            title: {
                text: title
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }
            ]
        };

        option && myChart.setOption(option);
    }, [])
    return <div>

        <div ref={chartRef} style={{ width: '500px', height: '400px' }}></div>
    </div>
}
export default BarChart