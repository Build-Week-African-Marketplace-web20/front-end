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
<form onSubmit={handleSubmit} className="addItemForm">
    <h5>Add Item:</h5>
    <label>
        <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChanges}
        placeholder='name'/>
    </label>
    <label>
        <input
        type="text"
        name="price"
        value={form.price}
        onChange={handleChanges}
        placeholder='price'/>
    </label>
    <label>
        <input
        type="text"
        name="description"
        value={form.description}
        onChange={handleChanges}
        placeholder='description'/>
    </label>
    <button>submit</button>
</form>

    )
}

const mapStateToProps = state => {
    return {state}
}
const mapDispatchToProps = {addItem}

export default connect (mapStateToProps, mapDispatchToProps) (TempAddForm)