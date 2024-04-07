//封装获取频道的函数
import { useEffect, useState } from "react";
import { getChanelApi } from "@/apis/article";

function useChanel() {
    //获取频道列表
    const [chanelList, setChanelList] = useState([])
    useEffect(() => {
        const getChanelList = async () => {
            const res = await getChanelApi()
            setChanelList(res)
        }
        getChanelList()
    }, []);
    return {
        chanelList
    }
}
export { useChanel }