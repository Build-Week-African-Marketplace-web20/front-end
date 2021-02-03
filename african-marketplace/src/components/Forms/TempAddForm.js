import React, {useState} from 'react'
import { connect, useDispatch } from 'react-redux'
import {addItem} from '../../redux/actions/ownersActions'

export const TempAddForm = ({addItem}) => {

    const dispatch = useDispatch()
    const [form, setForm] = useState({
        name:"",
        price: "",
        description: "",
        })


    const handleChanges = (e) => {
        setForm({...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        addItem(form)
        setForm({
            name:"",
            price: "",
            description: "",
        })
    }


    return(
        <section className="form-section">
<form onSubmit={handleSubmit} className="addItemForm">
    <h5>Add Item:</h5>
    <label htmlFor="name" />
        <input
        type="text"
        name="name"
        id="name"
        value={form.name}
        onChange={handleChanges}
        placeholder='name'/>
    <label htmlFor="price" />
        <input
        type="text"
        name="price"
        id="price"
        value={form.price}
        onChange={handleChanges}
        placeholder='price'/>
    <label htmlFor="desc" />
        <input
        type="text"
        name="description"
        id="desc"
        value={form.description}
        onChange={handleChanges}
        placeholder='description'/>
    <input type="submit" value="Submit" />
</form>
</section>

    )
}

const mapStateToProps = state => {
    return {state}
}
const mapDispatchToProps = {addItem}

export default connect (mapStateToProps, mapDispatchToProps) (TempAddForm)