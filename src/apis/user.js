import { request } from "@/utils";
export function loginAPI(formData) {
    return request({
        url: '/authorizations',
        method: 'POST',
        data: formData
    })
}
export function getProfileAPI(formData) {
    return request({
        url: '/user/profile',
        method: 'GET',

    })
}

