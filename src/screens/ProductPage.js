import React from 'react'
import { getProduct, editProduct } from '../misc/api'
import ProductTable from '../components/ProductTable'
import AddProductModal from '../components/AddProductModal'

const ProductPage = (props) => {

    const [products, setProducts] = React.useState([])
    const [addVisible, setAddVisible] = React.useState(false)
    const [editVisible, setEditVisible] = React.useState(false)

    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [unit, setUnit] = React.useState('')
    const [productID, setProductID] = React.useState('')

    React.useEffect(() => {
        getProduct(props.match.params.id)
            .then((data) => {
                setProducts(data)
            }).catch(err => {
                setProducts([])
            })
    }, [])

    const checkPrice = (price) => {
        return /^\d{1,}$/.test(price)
    }

    const handleEdit = (name, description, price, unit, _id) => {
        if (
            name.trim().length > 0 &&
            description.trim().length > 0 &&
            price.trim().length > 0 &&
            unit.trim().length > 0
        ) {
            if (checkPrice(price)) {
                editProduct(name, description, parseFloat(price), unit, _id)
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
        <>
            <div className='container is-max-widescreen'>
                <h1 className='title has-text-centered mt-4'>ข้อมูลสินค้า</h1>
                <div className='feild mb-2 mt-2'>
                    <button className='button is-fullwidth is-primary'
                        onClick={() => {
                            setAddVisible(true)
                        }}
                    >
                        + เพิ่มสินค้า
                    </button>
                </div>
                <ProductTable
                    products={products}
                    openEditModal={(item) => {
                        console.log(item);
                        setName(item.name)
                        setPrice(JSON.stringify(item.price))
                        setDescription(item.description)
                        setUnit(item.unit)
                        setProductID(item._id)
                        setEditVisible(true)
                    }}
                />
            </div>
            <AddProductModal
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
                            onClick={() => handleEdit(name, description, price, unit, productID)}
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

export default ProductPage