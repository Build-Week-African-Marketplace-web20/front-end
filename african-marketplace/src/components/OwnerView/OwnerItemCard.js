import React, {useState} from 'react'
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';

export const OwnerItemCard = () => {

const [isEditing, setIsEditing] = useState(false);

    return(
    <div>
        <Card className="ownerCard">
          <CardBody>
            <CardTitle tag="h5">Product Name</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Maybe price</CardSubtitle>
          </CardBody>
          
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            
            <CardLink>Edit Item</CardLink>
            {(isEditing ? <p>true</p> : <p>false</p>)}
          </CardBody>
        </Card>
      </div>
    )
}

export default OwnerItemCard;