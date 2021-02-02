//[ ] This component will house all of the StoreCards on display
//[ ] Install 'spotlight' element for showcasing selected items.
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getOwnerInventory, getInventory, getOwners } from '../../redux/actions/ownersActions'
import StoreCard from './StoreCard'

const mockupData = [
    {   name: "George Russell",
        inventory: [
                {
                    id: 12,
                    ownerName: "George Russell",
                    productName: "F1 Car",
                    description: "Wild and exotic gokart that goes ZOOM",
                    price: "$14,000,000",
                    category:"Vehicles",
                    location: "USA"
                },{
                    id: 22,
                    ownerName: "George Russell",
                    productName: "MotoGP Motorcycle",
                    description: "Bring ear protection because this thing SCREAMS down the road",
                    price: "$5,000,000",
                    category:"Vehicles",
                    location: "Spain"
                },{
                    id: 23,
                    ownerName: "George Russell",
                    productName: "Used Cup",
                    description: "Drank from this atleast twice",
                    price: "$5.00",
                    category:"Kitchenware",
                    location: "Kentucky"
                }
        ]},{   
        name: "Marc Marquez",
        inventory: [
                {
                    id: 34,
                    ownerName: "Marc Marquez",
                    productName: "Remote Controlled Robot",
                    description: "Has 3 arms that all kick",
                    price: "$20",
                    category:"Toys",
                    location: "Italy"
                },{
                    id: 45,
                    ownerName: "Marc Marquez",
                    productName: "MotoGP Motorcycle",
                    description: "Bring ear protection because this thing SCREAMS down the road",
                    price: "$5,000,000",
                    category:"Food",
                    location: "Italy"
                },{
                    id: 36,
                    ownerName: "Marc Marquez",
                    productName: "Remote Controlled Robot",
                    description: "Has 3 arms that all kick",
                    price: "$20",
                    category:"Toys",
                    location: "Italy"
                },{
                    id: 47,
                    ownerName: "Marc Marquez",
                    productName: "Tricycle",
                    description: "Great for three wheeling",
                    price: "$50",
                    category:"Toys",
                    location: "Germany"
                }
        ]}
    
    ]

console.log(mockupData)



export const Store = (props) => {
    //place this where mock is when props setup
    const [shownInventory, setShownInventory] = useState()
    console.log(props)

    // const formatData = () => {
    //     const formattedData = [];
    //     (inventory && inventory.map( (item) =>(
    //         formattedData.push(item.id)
    //     )))
    //     return(console.log(formattedData))
    // }
    // formatData();


    return(
        <>
        <p>Store Component</p>
        
        <div className="store">
            {/* Create a store-line for each owner in the API */}
           
      
        {(props.ownerInventory) && props.ownerInventory.map( ( item ) =>
            <div key={item.id} className="inventoryContainer">
                <div>
                    <h5>{item.name}'s Store</h5>
                    </div>
                <div className="inventoryItems">
                    
                       
                            {/* <StoreCard key={owner.id} /> */}
                        
                    
                    </div>
                </div>
            )}

                    
        </div>
        </>
        )
}
//own props?
// const mapStateToProps = (state ) =>{
    
//     return{
//         owners: state.ownerList,
//         inventory: state.siteInventory,
//         storeInventory: state.currentInventory,
//         ownerInventory: state.ownerInventory
//     }
// }
// const mapDispatchToProps={getOwners, getInventory}

// export default connect (mapStateToProps,mapDispatchToProps)(Store);
export default Store;

