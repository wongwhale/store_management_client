import React from 'react'

import { createStore } from '../misc/api'

const AddStoreModal = ({ modalVisible, setModalVisible }) => {

    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [address, setAddress] = React.useState('')

    const handleIncrease = () => {
        if (
            name.trim().length > 0 &&
            description.trim().length > 0 &&
            phone.trim().length > 0 &&
            address.trim().length > 0
        ) {
            createStore(name, description, phone, address).then((res) => {
                console.log(res);
                window.location.reload()
            }).catch(err => {
                console.log(err);
            })
        } else {
            alert('กรุณาระบุข้อมูลให้ครบ')
        }
    }

    return (
        <div className={modalVisible ? 'modal is-active' : 'modal'}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">ระบุข้อมูลร้านค้า</p>
                    <button className="delete" aria-label="close"
                        onClick={() => setModalVisible(false)}
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
                        onClick={() => handleIncrease()}
                    >Save changes</button>
                    <button className="button"
                        onClick={() => setModalVisible(false)}
                    >Cancel</button>
                </footer>
            </div>
        </div>
    )
}

export default AddStoreModal