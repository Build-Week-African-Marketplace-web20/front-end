import React, {useEffect, useState} from 'react'


import TempAddForm from '../Forms/TempAddForm'
import OwnerItemCard from '../OwnerView/OwnerItemCard'
import { connect } from 'react-redux'
import {getInventory, editItem, getOwnerInventory, deleteItem} from '../../redux/actions/ownersActions'





export const Inventory = ({deleteItem,ownerInventory, getOwnerInventory, owner, siteInventory, getInventory, editItem}) => {

    const [inventoryList , setInventoryList] = useState([])
    const myOwner = owner
    console.log(myOwner, "ownerID")
    
    useEffect(()=>{
        // console.log("UE Fired - Inventory", siteInventory)
        getInventory();
        getOwnerInventory(myOwner);
        // grabMyItems();
    },[])

    const grabMyItems = () =>{
        // console.log(siteInventory)
        const myItems = siteInventory.filter(item => item.users_id === myOwner ) 
        setInventoryList(myItems);
    }

    const addToInventory = async (item) => {
        const newItem = {
            name: item.name,
            price: item.price,
            category: item.category,
            location: item.location,
            users_id: myOwner,
        }
        await getOwnerInventory(myOwner)
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
        editItem(newItem)    
         await getOwnerInventory(myOwner);
        // grabMyItems();
    }

    const deleteToInventory = async (item) => {
        const delItem = {
            id: item
        }
        deleteItem(delItem.id)
        await getOwnerInventory(myOwner)

    }

    // const isOwner = (siteInventory) => {
    //     return siteInventory.item.id === myOwner
    // }
     

    return(
    <>
        <div className="myInventory">
            <div className="myControls"> 
                <TempAddForm addToInventory={addToInventory}/>
                </div>
            <div className="myItems">
                {/* <button onClick={()=>getOwnerInventory(owner)}>Get Owner Inventory</button> */}
            

                {ownerInventory && ownerInventory.map(
                    (item) =>
                        <OwnerItemCard key={item.id} data={item}  editToInventory={editToInventory} deleteToInventory={deleteToInventory} />
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
const mapDispatchToProps ={getInventory, editItem, getOwnerInventory, deleteItem}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);