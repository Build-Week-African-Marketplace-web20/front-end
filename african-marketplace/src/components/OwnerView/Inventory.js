import React, {useEffect, useState} from 'react'

import StoreCard from '../Store/Storefront'
import TempAddForm from '../Forms/TempAddForm'
import OwnerItemCard from '../OwnerView/OwnerItemCard'
import { connect } from 'react-redux'
import {getOwnerInventory} from '../../redux/actions/ownersActions'




export const Inventory = () => {

    const [inventoryList , setInventoryList] = useState([])

    useEffect(()=>{

    },[])

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

const mapStateToProps = (state) => {
    return {
        siteInventory: state.data.siteInventory,
        ownerInventory: state.data.owner.inventory,
    }
}
const mapDispatchToProps ={getOwnerInventory}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);