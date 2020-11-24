import React from 'react';

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
    <div className="summary__total__value">
        {USCurrencyFormat.format(total)}
    </div>
    ) 
  }

export default Total;