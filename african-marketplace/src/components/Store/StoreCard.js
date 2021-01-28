//[ ] This component will display information from an array of items provided from the owner of the shop. 

import React from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, CardSubtitle } from 'reactstrap';



export const StoreCard = (props) => {

const {ownerName, productName, price, description, location, category} = props.item

console.log(props.item)
    return(
        <div className="storeCard">
            <Card color="primary">
                <CardHeader className="text-warning">{productName}</CardHeader>
                <CardBody>
                    <CardTitle tag="h5">
                    Price: {price}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-warning">
                    Seller: {ownerName} </CardSubtitle>
                    {/* <CardText>
                    <div>
                        
                        </div>
                    <div>
                        Location: {location} ||  Category: {category}
                        </div>
                        </CardText> */}
                </CardBody>
                {/* <CardFooter>
                
                        {description}
                </CardFooter> */}
            </Card>
        </div>
    )
}

export default StoreCard;