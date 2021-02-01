import React, {useEffect, useState} from 'react'
import { getInventory } from '../../utils/getInventory'

export const Inventory = () => {

    const [inventoryList , setInventoryList] = useState([])

    // get InventoryList of owner on mounting of component, set to state
    useEffect(()=>{
        console.log("Inventory UE Fired")
        getInventory()
            .then(res=>{
                console.log("Inv UE Res", res)
                // setInventoryList(res)
            })
            .catch(err=>{
                console.log("Inv UE Err", err)

            })
        }, [])

    return(
    <>
        {/* Component for controls over inventory list, Del/Ed */}
        {/* Component for inventory showing. Re-use storecard & Storefront? */}
    </>
    )
}