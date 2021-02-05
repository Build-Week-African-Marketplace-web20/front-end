//This components goal is to have the market displaying down the right 2/3 of the screen 
//and a list of filters available on the left hand side.


import React, {useEffect} from 'react'
import {Button} from 'reactstrap'

import { connect } from 'react-redux'
import { getInventory, getOwners, getOwnerInventory, getItems } from '../../redux/actions/ownersActions'
import { Table } from 'reactstrap';


export const Storefront = ({owners, siteInventory, getOwnerInventory, getInventory}) => {

    
    useEffect(()=>{
        // getOwners()
        getInventory();
        // console.log("UE Fired, Storefront:", owners)
    }, [])
    
    
    return(
        <div className="storeFrontContainer">
            <button onClick={()=>getInventory()}>Get Items</button>
            
            <h3>Available Items:</h3>
           
                <div className="marketplace">
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Location</th>
                            <th>Seller</th>
                        </tr>
                    </thead>
                    <tbody>
                    { siteInventory && siteInventory.map(
                        (item) => (
                            
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <th>{item.name}</th>
                                <th>${item.price}</th>
                                <th>{item.category}</th>
                                <th>{item.location}</th>
                                <th>{item.owner}</th>
                            </tr>
                            )
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