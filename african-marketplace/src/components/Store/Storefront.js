//This components goal is to have the market displaying down the right 2/3 of the screen 
//and a list of filters available on the left hand side.


import React, {useEffect, useState} from 'react'
import {Button} from 'reactstrap'
import Store from './Store'
import { connect } from 'react-redux'
import { getInventory, getOwners, getOwnerInventory, getItems } from '../../redux/actions/ownersActions'
import  TempAddForm  from '../Forms/TempAddForm'

export const Storefront = ({owners, siteInventory, getOwnerInventory, getOwners, getItems}) => {

    
    useEffect(()=>{
        getOwners()
        getItems();
        console.log("UE Fired, Storefront:", owners)
    }, [])
    
    
    return(
        <div className="storeFrontContainer">
            {/* <TempAddForm /> */}
            <p>Available Stores:</p>
            <div className="storeSelectorContainer">
                {}
                {owners && owners.map(
                    owner => (
                        <Button 
                            key={owner.id}
                            onClick={getOwnerInventory(owner.id)}>
                            {owner.username}</Button>
                        ))}
                </div>

            {owners && owners.map(
                    owner => (
                        
                        <Store ownerInventory={siteInventory}/>
                        ))}
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        owners: state.data.ownerList,
        siteInventory: state.data.siteInventory

    }
}
const mapDispatchToProps = {getInventory, getOwnerInventory, getOwners, getItems}

export default connect(mapStateToProps,mapDispatchToProps) (Storefront);