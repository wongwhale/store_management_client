import React from 'react'
import { withRouter } from 'react-router-dom'
import { deleteProduct } from '../misc/api'

const ProductTable = ({ products , openEditModal }) => {

    const handleDelete = (_id) => {
        deleteProduct(_id)
        .then( () => {
            window.location.reload()
        }).catch( () => {
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
                        <th>ราคา</th>
                        <th>หน่วย</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>{item.unit}</td>
                                    <td>
                                        <div className='buttons are-small'>
                                            <button className='button is-warning'
                                                onClick={ () => {
                                                    openEditModal(item)
                                                }}
                                            >
                                                แก้ไข
                                            </button>
                                            <button className='button is-danger'
                                                onClick={ () =>{
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

export default withRouter(ProductTable)