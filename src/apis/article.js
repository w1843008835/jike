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

export function getArticleListAPI(params) {
    return request({
        url: "/article",
        method: 'GET',
        params
    })
}

export function delArticleAPI(id) {
    return request({
        url: `/article/${id}`,
        method: 'DELETE'

    })
}

export function getArticleById(id) {
    return request({
        url: `/article/${id}`
    })
}