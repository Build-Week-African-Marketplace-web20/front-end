//This components goal is to have the market displaying down the right 2/3 of the screen 
//and a list of filters available on the left hand side.


import React, {useEffect, useState} from 'react'
import {Button} from 'reactstrap'
import Store from './Store'
import { connect } from 'react-redux'
import { getInventory, getOwners, getOwnerInventory, getItems } from '../../redux/actions/ownersActions'
import { Table } from 'reactstrap';
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
            <h3>Available Items:</h3>
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
                    {siteInventory && siteInventory.map(
                        item => (
                            <tr>
                            <th>{item.id}</th>
                            <th>{item.name}</th>
                            <th>${item.price}</th>
                            <th>{item.description}</th>
                            </tr>)
                        )}
                    </tbody>
                
                </Table>
                </div>
                
            {/* {owners && owners.map(
                    owner => (
                        
                        <Store ownerInventory={siteInventory}/>
                        ))} */}
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