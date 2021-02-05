import React, {useState} from 'react'
import {useDispatch, connect} from 'react-redux'
// import {editInventory} from '../../redux/actions/ownersActions'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export const TempEditForm = (props,{owner}) => {
    // const thisOwner = owner;
    const thisItem = props.data.data;
    // console.log(thisItem.id)

    // console.log('Editable Item', props.data.data)
    // console.log('All EditForm Props', props)

    // console.log(data)

    const dispatch = useDispatch()
    const [form, setForm] = useState({
        // name:"",
        // price: "",
        // category: "",
        // location: "",
        // users_id: ""
        id: thisItem.id,
        name:thisItem.name,
        price: thisItem.price,
        category: thisItem.category,
        location: thisItem.location,
        users_id: thisItem.users_id
        })

        // { "name": "Here", <-- String
        // "price": "0.00$", <-- String
        //  "category": "Here", <-- String 
        //  "location": "Here", <-- String 
        //  "users_id": 123 <-- Integer }


    const handleChanges = (e) => {
        console.log(e);
        setForm({...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        props.data.editToInventory(form)
        // setForm({
        //     name:"",
        //     price: "",
        //     description: "",
        // })
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
    

        {/* <Input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChanges}
            placeholder='Brief description'/> */}


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
    
    <Button color="primary">Update Item</Button>
</Form>





    )
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        data : ownProps.data,
        owner: state.data.owner
    }
}
// const mapDispatchToProps = {editInventory}

export default connect (mapStateToProps, {}) (TempEditForm)
// export default TempEditForm;