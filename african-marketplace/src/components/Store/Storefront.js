//This components goal is to have the market displaying down the right 2/3 of the screen 
//and a list of filters available on the left hand side.


import React from 'react'
import Store from './Store'


export const Storefront = () => {


    return(
        <div>
            <p>Storefront on screen</p>
            {/* PlaceHolder for filterList Component */}
            <Store />
        </div>
    )
}

export default Storefront;