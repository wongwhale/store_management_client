import React from 'react'
import { deleteCatagory } from '../misc/api'
import { withRouter } from 'react-router-dom'


const CatagoryTable = ({ catagories ,openModal , history }) => {

    const handleClickRow = (catagory_id) => {
        history.push(`/catagory/${catagory_id}`)
    }

    const handleDelete = (_id) => {
        deleteCatagory(_id)
            .then(() => {
                window.location.reload()
            }).catch(() => {
                alert('มีบางอย่างผิดพลาด')
            })
    }

    return (
        <>
            <table className='table is-bordered is-narrow is-hoverable is-fullwidth'>
                <thead>
                    <tr>
                        <th>ชื่อ</th>
                        <th>รายละเอียด</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        catagories.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td
                                        className='cursor'
                                        onClick={() => handleClickRow(item._id)}
                                    >
                                        {item.name}
                                    </td>
                                    <td
                                        className='cursor'
                                        onClick={() => handleClickRow(item._id)}
                                    >
                                        {item.description}
                                    </td>
                                    <td>
                                        <div className='buttons are-small'>
                                            <button className='button is-warning'
                                                onClick={() => openModal(item)}
                                            >
                                                แก้ไข
                                            </button>
                                            <button className='button is-danger'
                                                onClick={() => handleDelete(item._id)}
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

export default withRouter(CatagoryTable)