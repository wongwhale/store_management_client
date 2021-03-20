import React from 'react'

import { createCatagory } from '../misc/api'
import { withRouter } from 'react-router-dom'

const AddCatagoryModal = ({ modalVisible, setModalVisible, match }) => {

    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')

    const handleIncrease = () => {
        if (
            name.trim().length > 0 &&
            description.trim().length > 0
        ) {
            createCatagory(name, description, match.params.id)
                .then((data) => {
                    console.log(data);
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
                        <label className="label">ชื่อประเภทสินค้า</label>
                        <input
                            className='input'
                            placeholder='ชื่อประเภทสินค้า'
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

export default withRouter(AddCatagoryModal)