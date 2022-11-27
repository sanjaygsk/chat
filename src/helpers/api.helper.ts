import axios from 'axios'
import { serviceUrl } from './varables.helpers'

const authHeader = ''

const makeRequest = async (endpoint: string = '', type: string, data: object = {}) => {
    try{
        var Url = ''
        if(type !== 'GET'){
            Url = endpoint + data
        } else {
            Url = endpoint
        }

        var Headers = {}

        if(authHeader !== '' ){
            Headers = {
                'content-type': 'application/json',
                Authorization: authHeader
            }
        } else if(authHeader === '') {
            Headers = {
                'content-type': 'application/json'
            }
        }
        
        const response = await axios({
            url: Url,
            method: type,
            data: data,
            headers: Headers
        })

        console.error(response)

        return response?.data
    } catch(e){
        console.error('API Error', e)
    }
}

export const getRequest = async(endPoint: string) => {
    return makeRequest(`${endPoint}`, 'GET')
}

export const postRequest = async(endPoint: string, body: any) => {
    return makeRequest(`${serviceUrl.url}/${endPoint}`, 'POST', body)
}

export const putRequest = async(endPoint: string, body: any) => {
    return makeRequest(`${serviceUrl.url}/${endPoint}`, 'PUT', body)
}

export const deleteRequest = async(endPoint: string, body: any) => {
    return makeRequest(`${serviceUrl.url}/${endPoint}`, 'DELETE', body)
}