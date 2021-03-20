import React from 'react'
import { createStore, getStore, editStore } from '../misc/api'
import StoreTable from '../components/StoreTable'
import AddStoreModal from '../components/AddStoreModal'

const StorePage = () => {

    const [store, setStore] = React.useState([])
    const [modalVisible, setModalVisible] = React.useState(false)
    const [editVisible, setEditVisible] = React.useState(false)

    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [storeID, setStoreID] = React.useState('')

    const handleEdit = (name, description, phone, address, _id) => {
        if (
            name.trim().length > 0 &&
            description.trim().length > 0 &&
            phone.trim().length > 0 &&
            address.trim().length > 0
        ) {
            editStore(name, description, phone, address, _id).then((res) => {
                console.log(res);
                window.location.reload()
            }).catch(err => {
                console.log(err);
            })
        } else {
            alert('กรุณาระบุข้อมูลให้ครบ')
        }
    }

    React.useEffect(() => {
        getStore().then(res => {
            setStore(res)
        }).catch(() => {
            setStore([])
        })
    }, [])

    const removeStore = (_id) => {
        const temp = store.filter((val) => {
            return val._id !== _id
        })
        setStore(temp)
    }



    return (
        <>
            <div className='container is-max-widescreen'>
                <h1 className='title has-text-centered mt-4'>ข้อมูลร้านค้า</h1>
                <div className='feild mb-2 mt-2'>
                    <button className='button is-fullwidth is-primary'
                        onClick={() => {
                            setModalVisible(true)
                        }}
                    >
                        + เพิ่มร้านค้า
                    </button>
                </div>
                <div>
                    <StoreTable
                        store={store}
                        openModal={(val) => {
                            setEditVisible(true)
                            setName(val.name)
                            setDescription(val.description)
                            setPhone(val.phone)
                            setAddress(val.address)
                            setStoreID(val._id)
                        }}
                        removeStore={(_id) => removeStore(_id)}
                    />
                </div>
            </div>
            <AddStoreModal
                setModalVisible={(val) => setModalVisible(val)}
                modalVisible={modalVisible}
            />

            <div className={editVisible ? 'modal is-active' : 'modal'}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">แก้ไขข้อมูลร้านค้า</p>
                        <button className="delete" aria-label="close"
                            onClick={() => setEditVisible(false)}
                        ></button>
                    </header>
                    <section className="modal-card-body">
                        <div className='field'>
                            <label className="label">ชื่อร้าน</label>
                            <input
                                className='input'
                                placeholder='ชื่อร้าน'
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                        </div>
                        <div className='field'>
                            <label className="label">รายละเอียดเพิ่มเติม</label>
                            <input
                                className='input'
                                placeholder='รายละเอียดเพิ่มเติม'
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                            />
                        </div>
                        <div className='field'>
                            <label className="label">เบอร์โทร</label>
                            <input
                                className='input'
                                placeholder='เบอร์โทร'
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value)
                                }}
                            />
                        </div>
                        <div className='field'>
                            <label className="label">ที่อยู่</label>
                            <input
                                className='input'
                                placeholder='ที่อยู่'
                                value={address}
                                onChange={(e) => {
                                    setAddress(e.target.value)
                                }}
                            />
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success"
                            onClick={() => handleEdit(name, description, phone, address, storeID)}
                        >Save changes</button>
                        <button className="button"
                            onClick={() => setEditVisible(false)}
                        >Cancel</button>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default StorePage