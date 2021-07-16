import {Checkout as SourceCheckout} from 'SourceRoute/Checkout/Checkout.component';

import ProgressBar from '../../Components/ProgressBar/ProgressBar.component'
import './Checkout.extenstion.style.scss'


export class CheckoutComponent extends SourceCheckout {
    constructor(props){
        super(props);
    }
    render(){
        const elementTree = super.render();
        console.log(elementTree)
        return <>
            <div><ProgressBar checkoutStep={this.props.checkoutStep}/></div>
            {super.render()}
            </>
    }
}

export default CheckoutComponent;