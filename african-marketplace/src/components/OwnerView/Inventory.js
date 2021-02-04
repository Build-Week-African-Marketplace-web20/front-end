import React, {useEffect, useState} from 'react'

import StoreCard from '../Store/Storefront'
import TempAddForm from '../Forms/TempAddForm'
import OwnerItemCard from '../OwnerView/OwnerItemCard'
import { connect } from 'react-redux'
import {getInventory} from '../../redux/actions/ownersActions'




export const Inventory = ({ownerInventory, owner, siteInventory, getInventory}) => {

    const [inventoryList , setInventoryList] = useState([])
    const myOwner = owner
    
    useEffect(()=>{
        console.log("UE Fired - Inventory", siteInventory)
        getInventory();
        grabMyItems();
    },[getInventory])

    const grabMyItems = () =>{
        console.log(siteInventory)
        const myItems = siteInventory.filter(item => item.users_id === myOwner ) 
        setInventoryList(myItems);
    }

    return(
    <>
    <div className="myInventory">
        <div className="myControls">
            
            <TempAddForm /></div>
        <div className="myItems">
            {/* <button onClick={()=>console.log(siteInventory)}>Log</button> */}
            {inventoryList && inventoryList.map(
                (item) => 
                    <OwnerItemCard key={item.id} data={item} />
                    )}
                
            </div>
    </div>
    </>
    )}

const mapStateToProps = (state) => {
    return {
        siteInventory: state.data.siteInventory,
        ownerInventory: state.data.owner.inventory,
        owner: state.data.owner.id
    }
}
const mapDispatchToProps ={getInventory}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);