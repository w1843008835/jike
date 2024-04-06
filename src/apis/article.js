//封装文章下拉框数据
import { request } from "@/utils";

export function getChanelApi() {
    return request({
        url: '/chanels',
        method: 'GET',

    })
}

export function createArticleAPI(data) {
    return request(
        {
            url: '/article?draft=false',
            method: 'POST',
            data
        }
    )

}