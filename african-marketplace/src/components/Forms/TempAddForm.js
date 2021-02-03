import React, {useState} from 'react'
import { connect, useDispatch } from 'react-redux'
import {addItem} from '../../redux/actions/ownersActions'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
<Form onSubmit={handleSubmit} className="addItemForm">
    <h3>Add Item</h3>
    <Label>Product Name:</Label>
        <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChanges}
            placeholder='Name'/>
    
    <Label>Price:</Label>
        <Input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChanges}
            placeholder='Price'/>
    
    <Label>Description:</Label>
        <Input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChanges}
            placeholder='Brief description'/>
    
    <Button color="primary">Add Item</Button>
</Form>

    )
}

const mapStateToProps = state => {
    return {state}
}
const mapDispatchToProps = {addItem}

export default connect (mapStateToProps, mapDispatchToProps) (TempAddForm)