import React from 'react'
import { Toast, ToastBody, ToastHeader,Button } from 'reactstrap';
import pic1 from '../assets/pic01.jpeg'
import {useHistory} from 'react-router-dom'

export const LandingPage = () => {


    const history = useHistory();
    const goToMarket = (e) => {
        e.preventDefault();
        history.push('/market')  }



    return(
    <>
    <h1>AFRICAN MARKETPLACE</h1>
    <img src={pic1} />
    <h2>AFRICAN MARKETPLACE EMPOWERS SMALL BUSINESS OWNERS TO IMPROVE THEIR BUSINESS AND ECONOMIC OPPORTUNITIES TO GROW OUT OF POVERTY.</h2>
<div className="toastContainer">
    <div className="topToasts">
    <Toast>
        <ToastHeader icon="primary">
            Totally Real Person's Name:
            </ToastHeader>
        <ToastBody>
            Sharing a marketplace with other owners allows me to connect with shoppers I never would have met!
            </ToastBody>
    </Toast>
    <Toast>
        <ToastHeader icon="success">
            Totally Real Other Person's Name:
            </ToastHeader>
        <ToastBody>
        This market should have opened years ago - Im able to provide for my family thanks to the new customers I am receiving.
            </ToastBody>
    </Toast>
    </div>
    <div className="bottomToasts">
    <Toast>
        <ToastHeader icon="warning">
            Totally Different Person's Name:
            </ToastHeader>
        <ToastBody>
        I have the ability to update all of my inventory prices in one place and have them update on the market!
            </ToastBody>
    </Toast>
    </div>

    </div>

<footer>
<Button onClick={goToMarket} className="bottomButton" color="warning" outline >Browse Marketplace</Button>
<h2>Enter the Marketplace Now</h2>
</footer>

    </>
        )
}

export default LandingPage;



