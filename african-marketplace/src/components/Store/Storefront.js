//This components goal is to have the market displaying down the right 2/3 of the screen 
//and a list of filters available on the left hand side.


import React, {useEffect, useState} from 'react'
import {Button} from 'reactstrap'
import Store from './Store'
import { connect } from 'react-redux'
import { getInventory, getOwners, getOwnerInventory, getItems } from '../../redux/actions/ownersActions'
import { Table } from 'reactstrap';
import  TempAddForm  from '../Forms/TempAddForm'

export const Storefront = ({owners, siteInventory, getOwnerInventory, getInventory}) => {

    
    useEffect(()=>{
        // getOwners()
        getInventory();
        // console.log("UE Fired, Storefront:", owners)
    }, [])
    
    
    return(
        <div className="storeFrontContainer">
            <button onClick={()=>getInventory()}>Get Items</button>
            <button onClick={()=>console.log(siteInventory)}>Log</button>
            <h3>Available Items:</h3>
            <div className="storeSelectorContainer">
                
                {owners && owners.map(
                    owner => (
                        <Button 
                            key={owner.id}
                            onClick={getOwnerInventory(owner.id)}>
                            {owner.username}</Button>
                        ))}
                </div>
                <div className="marketplace">
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    { siteInventory && siteInventory.map(
                        (item) => (
                            <tr key={item.id}>
                            <th>{item.name}</th>
                            <th>{item.owner}</th>
                            <th>${item.price}</th>
                            <th>{item.category}</th>
                            <th>{item.location}</th>
                            </tr>)
                        )}
                    </tbody>
                
                </Table>
                </div>
                
           
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