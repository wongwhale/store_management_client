import axios from 'axios'
import WEB_URL from './WEB_URL'

export const createStore = (name , description , phone , address) => {
    return new Promise ( (resolve , reject) => {
        axios({
            url : `${WEB_URL}/api/store/create`,
            method : 'post',
            data: {
                name : name ,
                description : description,
                phone : phone,
                address : address
            }
        })
        .then( (res) => {
            resolve(res.data)
        }).catch( (err) => {
            reject(err)
        })
    })
}

export const deleteStore = (_id) => {
    return new Promise ( (resolve , reject) => {
        axios({
            url : `${WEB_URL}/api/store/delete`,
            method : 'post',
            data: {
                _id : _id
            }
        })
        .then( (res) => {
            resolve(res.data)
        }).catch( (err) => {
            reject(err)
        })
    })
}

export const editStore = (name, description, phone, address , _id) => {
    return new Promise ( (resolve , reject) => {
        axios({
            url : `${WEB_URL}/api/store/edit`,
            method : 'patch',
            data : {
                name ,
                description,
                phone,
                address,
                _id
            }
            
        }).then( res => {
            resolve(res.data)
        }).catch( err => {
            reject(err)
        })
    } )
}

export const getStore = () => {
    return new Promise( (resolve , reject) => {
        axios({
            url : `${WEB_URL}/api/store/get`,
            method : 'get',
        }).then( res => {
            resolve(res.data)
        }).catch( err => {
            reject(err)
        })
    })
}

export const createCatagory = (name , description , store_id) => {
    return new Promise( (resolve , reject) => {
        axios({
            url : `${WEB_URL}/api/catagory/create`,
            method : 'post',
            data : {
                name : name,
                description : description,
                store_id : store_id
            }
        }).then( (res) => {
            resolve(res.data)
        }).catch( err => {
            reject(err)
        })
    })
}   

export const editCatagory = (name , description , _id) => {
    return new Promise( (resolve , reject) => {
        axios({
            url : `${WEB_URL}/api/catagory/edit`,
            method : 'patch',
            data : {
                name , 
                description , 
                _id
            }
        }).then( (res) => {
            resolve(res.data)
        }).catch( (err) => {
            reject(err)
        })
    })
}

export const deleteCatagory = (_id) => {
    return new Promise( (resolve , reject) => {
        axios({
            url : `${WEB_URL}/api/catagory/delete`,
            method : 'post',
            data : {
                _id : _id
            }
        }).then( (res) => {
            resolve(res.data)
        }).catch( (err) => {
            reject(err)
        })
    })
}

export const getCatory = (store_id) => {
    return new Promise( (resolve , reject) => {
        axios({
            url : `${WEB_URL}/api/catagory/get`,
            method : 'post',
            data : {
                store_id : store_id
            }
        }).then( res => {
            resolve(res.data)
        }).catch( err => {
            reject(err)
        })
    })
}

export const createProduct = (name , description , price , unit , catagory_id) => {
    return new Promise( (resolve , reject) => {
        axios({
            url : `${WEB_URL}/api/product/create`,
            method : 'post',
            data : {
                name ,
                description,
                price,
                unit,
                catagory_id
            }
        }).then( (res) => {
            resolve(res.data)
        }).catch( (err) => {
            reject(err)
        })
    })
}

export const deleteProduct = (_id) => {
    return new Promise( (resolve , reject) => {
        axios({
            url : `${WEB_URL}/api/product/delete`,
            method : 'post',
            data : {
                _id
            }
        }).then( (res) => {
            resolve(res)
        }).catch( (err) => {
            reject(err)
        })
    })
}

export const editProduct = ( name , description , price , unit , _id) => {
    return new Promise ( (resolve , reject) => {
        axios({
            url : `${WEB_URL}/api/product/edit`,
            method : 'patch',
            data : {
                _id,
                name,
                description,
                price,
                unit
            }
        }).then( (res) => {
            resolve(res.data)
        }).catch( (err) => {
            reject(err)
        })
    })
}

export const getProduct = (catagory_id) => {
    return new Promise( (resolve , reject) => {
        axios({
            url : `${WEB_URL}/api/product/get`,
            method : 'post',
            data : {
                catagory_id : catagory_id
            }
        }).then ( res => {
            resolve(res.data)
        }).catch( err => {
            reject(err)
        })
    })
}