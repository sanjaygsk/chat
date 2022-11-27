import { commonTypes } from "../constants"

export const loader = (data: any) => {
    return{
        type: commonTypes.LOADER,
        payload: data
    }
}

export const getNews = () =>{ return{
    type: commonTypes.REQ
}};