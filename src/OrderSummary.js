import React from 'react';
import Total from './Total';
import PartsSummary from './PartsSummary';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

function OrderSummary(props){
    return(
        <section className="main__summary">
            <h2>Your cart</h2>
            <PartsSummary selectedParts = {props.selectedParts}/>
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <Total selectedParts = {props.selectedParts}/>
            </div>
          </section>
    )
}

export default OrderSummary;