import React, {useState} from 'react'
import {
    Card, CardText, CardBody, Button,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import TempEditForm from '../Forms/TempEditForm'

export const OwnerItemCard = (props) => {

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
            
            <Button color="primary" size="sm" outline onClick={()=>setIsEditing(!isEditing)}>Toggle Edit</Button>
            {(isEditing ? <TempEditForm/> : "")}
          </CardBody>
        </Card>
      </div>
    )
}

export default OwnerItemCard;