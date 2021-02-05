import React, {useState} from 'react'
import {
    Card, CardText, CardBody, Button,
    CardTitle, CardSubtitle, CardHeader
  } from 'reactstrap';
import TempEditForm from '../Forms/TempEditForm'

export const OwnerItemCard = (props) => {

  const [card, setCard] = useState(props);
  console.log('props', props)

  const liftEditItem = (item) => {
    const postEdit = {
      name: item.name,
      price: item.price,
      category: item.category,
      location: item.location,
      users_id: item.users_id,
    }
    setCard(postEdit)
  }

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
    
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
            <Button 
              color="warning" 
              size="sm" 
              outline 
              onClick={()=>setIsDeleting(!isDeleting)}>
                 Remove Item?</Button>
            {(isDeleting ? 
            <div>
              <Button 
                color="danger" 
                size="sm" 
                outline 
                onClick={()=>props.deleteItem(props.data.id)}>
                  Remove</Button> 
                  <Button 
                  color="info" 
                  size="sm" 
                  outline 
                  onClick={()=>props.deleteItem(props.data.id)}>
                    Cancel</Button> 
                    </div>
                  : 
              ""
                )}
                <Button 
              color="primary" 
              size="sm" 
              outline 
              onClick={()=>setIsEditing(!isEditing)}>
                Toggle Edit</Button>


            {(isEditing ? <TempEditForm data={props}/> : "")}
          </CardBody>
        </Card>
      </div>
    )
}

export default OwnerItemCard;