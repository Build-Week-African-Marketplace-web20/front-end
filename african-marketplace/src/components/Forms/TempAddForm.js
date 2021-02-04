//Notes
//The form has a field to select from a dropdown a list of cities and add it to the item .Post. 
// The database can currently not handle this request. 
// Uncomment when available.


import React, {useState} from 'react'
import { connect, useDispatch } from 'react-redux'
import {addItem} from '../../redux/actions/ownersActions'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export const TempAddForm = ({owner, addItem}) => {
    const thisOwner = owner
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        name:"",
        price: "",
        // description: "",
        category: "",
        location: "",
        users_id: thisOwner
        })

       



    const handleChanges = (e) => {
        setForm({...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(form)
        addItem(form)
        setForm({
            name:"",
            price: "",
            // description: "",
            location: "",
            category: "",
            users_id: "",
        })
    }
    


    return(

<Form onSubmit={handleSubmit} className="addItemForm">
    <h3>Add Item</h3>
    <Button onClick={()=>console.log("log: ",form.category)}>Log</Button>
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
    
    {/* <Label>Description:</Label>
        <Input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChanges}
            placeholder='Brief description'/> */}

    <Label>Location:</Label>
        <Input
            type='select'
            name="location"
            value={form.location}
            onChange={handleChanges}>
                <option>Nigeria</option>
                <option>Ethiopia</option>
                <option>Egypt</option>
                <option>DR Congo</option>
                <option>Tanzania</option>
                <option>Kenya</option>
                <option>Uganda</option>
                <option>Other</option>
            </Input>
    <Label>Category:</Label>
        <Input
            type='select'
            name="category"
            value={form.category}
            onChange={handleChanges}>
                <option>Animal Products</option>
                <option>Beans</option>
                <option>Cereals</option>
                <option>Fruits</option>
                <option>Pasta</option>
                <option>Roots & Tubers</option>
                <option>Seeds & Nuts</option>
                <option>Other</option>
            </Input>
    
    <Button color="primary">Add Item</Button>
</Form>


    )
}

const mapStateToProps = state => {
    return {
        owner: state.data.owner.id}
}
const mapDispatchToProps = {addItem}

export default connect (mapStateToProps, mapDispatchToProps) (TempAddForm)