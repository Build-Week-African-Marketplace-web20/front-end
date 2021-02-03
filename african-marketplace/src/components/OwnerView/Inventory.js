import React, {useEffect, useState} from 'react'

import StoreCard from '../Store/Storefront'
import TempAddForm from '../Forms/TempAddForm'
import OwnerItemCard from '../OwnerView/OwnerItemCard'
export const Inventory = () => {

    const [inventoryList , setInventoryList] = useState([])

    // get InventoryList of owner on mounting of component, set to state
    const mockItem ={
        name: "Pizza",
        price: "1.99",
        description: "1 slice, pepperoni"
    }

    return(
    <>
    <div className="myInventory">
        <div className="myControls">
            
            <TempAddForm /></div>
        <div className="myItems">
            <OwnerItemCard  />
            <OwnerItemCard  />
            <OwnerItemCard  />
            <OwnerItemCard  />
            <OwnerItemCard  />
            </div>
    </div>
    </>
    )}

export default Inventory;