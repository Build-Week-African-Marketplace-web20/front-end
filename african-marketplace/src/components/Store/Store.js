//[ ] This component will house all of the StoreCards on display
//[ ] Install 'spotlight' element for showcasing selected items.
import React, { useState } from 'react'
// import { connect } from 'react-redux'
// import { getOwnerInventory, getInventory, getOwners } from '../../redux/actions/ownersActions'


//This component is not connected to redux.
export const Store = (props) => {
    
    const [shownInventory, setShownInventory] = useState()
    // console.log(props)


    return(
        <>
        <p>Store Component</p>
        <div className="store">
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

