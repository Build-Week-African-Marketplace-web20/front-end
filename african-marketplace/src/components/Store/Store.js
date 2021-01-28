//[ ] This component will house all of the StoreCards on display
//[ ] Install 'spotlight' element for showcasing selected items.
import React from 'react'
import StoreCard from './StoreCard'

const mockupData = [
    {   name: "George Russell",
        inventory: [
                {
                    id: 1,
                    ownerName: "George Russell",
                    productName: "F1 Car",
                    description: "Wild and exotic gokart that goes ZOOM",
                    price: "$14,000,000",
                    category:"Vehicles",
                    location: "USA"
                },{
                    id: 2,
                    ownerName: "George Russell",
                    productName: "MotoGP Motorcycle",
                    description: "Bring ear protection because this thing SCREAMS down the road",
                    price: "$5,000,000",
                    category:"Vehicles",
                    location: "Spain"
                },{
                    id: 2,
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
                    id: 3,
                    ownerName: "Marc Marquez",
                    productName: "Remote Controlled Robot",
                    description: "Has 3 arms that all kick",
                    price: "$20",
                    category:"Toys",
                    location: "Italy"
                },{
                    id: 4,
                    ownerName: "Marc Marquez",
                    productName: "MotoGP Motorcycle",
                    description: "Bring ear protection because this thing SCREAMS down the road",
                    price: "$5,000,000",
                    category:"Food",
                    location: "Italy"
                },{
                    id: 3,
                    ownerName: "Marc Marquez",
                    productName: "Remote Controlled Robot",
                    description: "Has 3 arms that all kick",
                    price: "$20",
                    category:"Toys",
                    location: "Italy"
                },{
                    id: 4,
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

export const Store = () => {
    return(
        <>
        <p>Select an item to receive more details.</p>
        <div className="store">



        {mockupData.map( ( owner ) =>

            <div key={owner.name} className="inventoryContainer">
                <div><h5>{owner.name}'s Store</h5></div>
                    <div className="inventoryItems">
                    {
                        owner.inventory.map(
                        item => (
                            <StoreCard item={item}/>
                        )
                    )}
                    </div>
                </div>
            ) }
           


        </div>
        </>
        )
}

export default Store;