import React from 'react'
import { withRouter } from 'react-router-dom'
import { createProduct } from '../misc/api'

const AddProductModal = ({ modalVisible, setModalVisible, match }) => {

    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [unit, setUnit] = React.useState('')

    const checkPrice = (price) => {
        return /^\d{1,}$/.test(price.trim())
    }

    const handleIncrease = () => {
        if (
            name.trim().length > 0 &&
            description.trim().length > 0 &&
            price.trim().length > 0 &&
            unit.trim().length > 0
        ) {
            if (checkPrice(price)) {
                createProduct(name, description, parseFloat(price.trim()), unit, match.params.id)
                    .then((res) => {
                        console.log(res);
                        window.location.reload()
                    }).catch(err => {
                        console.log(err);
                    })
            } else {
                alert('กรุณาระบุราคาเป็นตัวเลข')
            }
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
                        <label className="label">ชื่อสินค้า</label>
                        <input
                            className='input'
                            placeholder='ชื่อสินค้า'
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
                        <label className="label">ราคา</label>
                        <input
                            className='input'
                            placeholder='ราคา'
                            value={price}
                            onChange={(e) => {
                                setPrice(e.target.value)
                            }}
                        />
                    </div>
                    <div className='field'>
                        <label className="label">หน่วย</label>
                        <input
                            className='input'
                            placeholder='หน่วย'
                            value={unit}
                            onChange={(e) => {
                                setUnit(e.target.value)
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

export default withRouter(AddProductModal)