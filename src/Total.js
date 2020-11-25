import React from 'react';
import PartsSummary from './PartsSummary';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});


function Total(props){
    const total = Object.keys(props.selectedParts).reduce(
        (acc, curr) => acc + props.selectedParts[curr].cost,
        0
    );
    return(
        <section className="main__summary">
            <h2>Your cart</h2>
            <PartsSummary selectedParts = {props.selectedParts}/>
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                </div>
            </div>
        </section>
    )
    
  }

export default Total;