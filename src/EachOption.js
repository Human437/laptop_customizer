import React from 'react';
import { render } from 'react-dom';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

function EachOption(props){
    return (
        <div key={props.itemHash} className="feature__item">
          <input
            type="radio"
            id={props.itemHash}
            className="feature__option"
            name={slugify(props.feature)}
            checked={props.item.name === props.selected[props.feature].name}
            onChange={() => props.updateFeature(props.feature, props.item)}
          />
          <label htmlFor={props.itemHash} className="feature__label">
            {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
          </label>
        </div>
      );
}

export default EachOption;