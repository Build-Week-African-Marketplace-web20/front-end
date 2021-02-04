import React, {useState} from 'react'
import { connect, useDispatch } from 'react-redux'
import {editItem} from '../../redux/actions/ownersActions'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export const TempEditForm = ({owner,editItem}) => {

    const dispatch = useDispatch()
    const [form, setForm] = useState({
        name:"",
        price: "",
        description: "",
        id: owner.id
        })


    const handleChanges = (e) => {
        setForm({...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        editItem(form)
        setForm({
            name:"",
            price: "",
            description: "",
        })
    }


    return(

<Form onSubmit={handleSubmit} className="editItemForm">
    <h6>Edit Item</h6>
        <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChanges}
            placeholder='Name'/>
        <Input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChanges}
            placeholder='Price'/>
    

        <Input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChanges}
            placeholder='Brief description'/>
    
    <Button color="primary">Update Item</Button>
</Form>


    )
}

const mapStateToProps = state => {
    return {
        owner: state.data.owner
    }
}
const mapDispatchToProps = {editItem}

export default connect (mapStateToProps, mapDispatchToProps) (TempEditForm)