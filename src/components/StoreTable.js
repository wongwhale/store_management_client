import React from 'react'
import { deleteStore } from '../misc/api'
import { withRouter } from 'react-router-dom'

const StoreTable = ({ store, history, openModal, removeStore }) => {

    const handleClickRow = (store_id) => {
        history.push(`store/${store_id}`)
    }

    const handleDelete = (store_id) => {
        deleteStore(store_id).then((err) => {
            window.location.reload()
        }).catch((err) => {
            alert('มีบางอย่างผิดพลาด')
        })
    }

    return (
        <>
            <table className='table is-narrow is-bordered is-hoverable is-fullwidth'>
                <thead>
                    <tr>
                        <th>ชื่อ</th>
                        <th>รายละเอียด</th>
                        <th>เบอร์โทร</th>
                        <th>ที่อยู่</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        store.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td
                                        className='cursor'
                                        onClick={() => {
                                            handleClickRow(item._id)
                                        }}
                                    >
                                        {item.name}
                                    </td>
                                    <td
                                        className='cursor'
                                        onClick={() => {
                                            handleClickRow(item._id)
                                        }}
                                    >
                                        {item.description}
                                    </td>
                                    <td
                                        className='cursor'
                                        onClick={() => {
                                            handleClickRow(item._id)
                                        }}
                                    >
                                        {item.phone}
                                    </td>
                                    <td
                                        className='cursor'
                                        onClick={() => {
                                            handleClickRow(item._id)
                                        }}
                                    >
                                        {item.address}
                                    </td>
                                    <td>
                                        <div className='buttons are-small'>
                                            <button className='button is-warning'
                                                onClick={() => {
                                                    openModal(item)
                                                }}
                                            >
                                                แก้ไข
                                            </button>
                                            <button className='button is-danger '
                                                onClick={() => {
                                                    handleDelete(item._id)
                                                }}
                                            >
                                                ลบ
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default withRouter(StoreTable)