//[ ] This component will display information from an array of items provided from the owner of the shop. 

import React from 'react'
import { Card,  CardHeader, CardFooter, CardBody,
    CardTitle,  CardSubtitle } from 'reactstrap';



export const StoreCard = (props) => {

const {name, price, description, location, category} = props.item

// console.log(props.item)
    return(
        <div className="storeCard">
            <Card color="primary">
                <CardHeader className="text-warning">{props.name}</CardHeader>
                <CardBody>
                    <CardTitle tag="h5">
                    Price: {props.price}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-warning">
                    Seller:  </CardSubtitle>
                </CardBody>
                <CardFooter>
                        {props.description}
                </CardFooter>
            </Card>
        </div>
    )
}

export default StoreCard;