import React, {useEffect, useState} from 'react'

import StoreCard from '../Store/Storefront'
import TempAddForm from '../Forms/TempAddForm'
import OwnerItemCard from '../OwnerView/OwnerItemCard'
import { connect } from 'react-redux'
import {getInventory, editItem} from '../../redux/actions/ownersActions'





export const Inventory = ({ownerInventory, owner, siteInventory, getInventory, editItem}) => {

    const [inventoryList , setInventoryList] = useState([])
    const myOwner = owner
    
    useEffect(()=>{
        // console.log("UE Fired - Inventory", siteInventory)
        getInventory();
        grabMyItems();
    },[getInventory, editItem])

    const grabMyItems = () =>{
        // console.log(siteInventory)
        const myItems = siteInventory.filter(item => item.users_id === myOwner ) 
        setInventoryList(myItems);
    }

    const addToInventory = (item) => {
        const newItem = {
            name: item.name,
            price: item.price,
            category: item.category,
            location: item.location,
            users_id: myOwner,
        }
        setInventoryList([...inventoryList, newItem])
    }

    const editToInventory = async (item) => {
        const newItem = {
            id: item.id,
            name: item.name,
            price: item.price,
            category: item.category,
            location: item.location,
            users_id: myOwner,
        }
        console.log("before")
        await editItem(newItem)    
        getInventory();
        grabMyItems();
        console.log("Yess")
    }

    return(
    <>
    <div className="myInventory">
        <div className="myControls">
            
            <TempAddForm addToInventory={addToInventory}/></div>
        <div className="myItems">
            {/* <button onClick={()=>console.log(siteInventory)}>Log</button> */}
            {siteInventory && siteInventory.map(
                (item) => 
                    <OwnerItemCard key={item.id} data={item}  editToInventory={editToInventory}/>
                    )}
                
            </div>
    </div>
    </>
    )}

const mapStateToProps = (state) => {
    console.log({state})
    return {
        siteInventory: state.data.siteInventory,
        ownerInventory: state.data.owner.inventory,
        owner: state.data.owner.id
    }
}
const mapDispatchToProps ={getInventory, editItem}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);