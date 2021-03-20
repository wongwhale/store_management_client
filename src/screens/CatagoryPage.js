import React, { useState } from 'react'
import CatagoryTable from '../components/CatagoryTable'
import { getCatory, editCatagory } from '../misc/api'
import AddCatagoryModal from '../components/AddCatagoryModal'

const CatagoryPage = (props) => {

    const [catagories, setCatagory] = useState([])
    const [addVisible, setAddVisible] = useState(false)
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [catagoryID, setCatagoryID] = React.useState('')
    const [editVisible, setEditVisible] = React.useState(false)

    React.useState(() => {
        getCatory(props.match.params.id)
            .then((data) => {
                setCatagory(data)
            }).catch((err) => {
                setCatagory([])
            })
    }, [])

    const handleEdit = (name, description, _id) => {
        if (
            name.trim().length > 0 &&
            description.trim().length > 0
        ) {
            editCatagory(name, description, _id)
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
        <>
            <div className='container is-max-widescreen'>
                <h1 className='title has-text-centered mt-4'>ข้อมูลประเภทสินค้า</h1>
                <div className='feild mb-2 mt-2'>
                    <button className='button is-fullwidth is-primary'
                        onClick={() => {
                            setAddVisible(true)
                        }}
                    >
                       + เพิ่มประเภทสินค้า
                    </button>
                </div>
                <CatagoryTable
                    catagories={catagories}
                    openModal={(val) => {
                        setEditVisible(true)
                        setName(val.name)
                        setDescription(val.description)
                        setCatagoryID(val._id)
                    }}
                />
            </div>
            <AddCatagoryModal
                modalVisible={addVisible}
                setModalVisible={(val) => setAddVisible(val)}
            />

            <div className={editVisible ? 'modal is-active' : 'modal'}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">ระบุข้อมูลร้านค้า</p>
                        <button className="delete" aria-label="close"
                            onClick={() => setEditVisible(false)}
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
                            onClick={() => handleEdit(name, description, catagoryID)}
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

export default CatagoryPage