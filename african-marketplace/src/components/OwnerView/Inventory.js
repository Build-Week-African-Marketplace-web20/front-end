import React, {useEffect, useState} from 'react'
import { getInventory } from '../../utils/getInventory'
import StoreCard from '../Store/Storefront'

export const Inventory = () => {

    const [inventoryList , setInventoryList] = useState([])

    // get InventoryList of owner on mounting of component, set to state
    

    return(
    <>
    <div className="tempHolder">
        <div className="temp">
            Controls</div>
            
        
        <StoreCard />
            
    </div>
        
    </>
    )
}


export default Inventory;