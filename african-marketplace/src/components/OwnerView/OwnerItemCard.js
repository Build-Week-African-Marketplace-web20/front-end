import React, {useState} from 'react'
import {
    Card, CardText, CardBody, Button,
    CardTitle, CardSubtitle, CardHeader
  } from 'reactstrap';
import TempEditForm from '../Forms/TempEditForm'

export const OwnerItemCard = (props) => {

  const [isEditing, setIsEditing] = useState(false);
    console.log(props)
    return(
    <div>
        <Card className="ownerCard">
          <CardHeader color="primary">
            <CardTitle tag="h5">{props.data.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.data.owner}</CardSubtitle>
          </CardHeader>
          
          <CardBody>
            <CardText>{props.data.price}</CardText>
            <CardText>Buy it here: {props.data.location}</CardText>
            <CardText>Category: {props.data.category}</CardText>
            <Button color="primary" size="sm" outline onClick={()=>setIsEditing(!isEditing)}>Toggle Edit</Button>
            {(isEditing ? <TempEditForm/> : "")}
          </CardBody>
        </Card>
      </div>
    )
}

export default OwnerItemCard;