import React from 'react';
import { render } from 'react-dom';
import slugify from 'slugify';
import RenderFeatures from './RenderFeatures';
import RenderOptions from './RenderOptions';
import EachOption from './EachOption';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

function SelectFeatures(props){
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            // <div key={itemHash} className="feature__item">
            //   <input
            //     type="radio"
            //     id={itemHash}
            //     className="feature__option"
            //     name={slugify(feature)}
            //     checked={item.name === props.selected[feature].name}
            //     onChange={() => props.updateFeature(feature, item)}
            //   />
            //   <label htmlFor={itemHash} className="feature__label">
            //     {item.name} ({USCurrencyFormat.format(item.cost)})
            //   </label>
            // </div>
            <EachOption itemHash = {itemHash} feature = {feature} item = {item} updateFeature = {props.updateFeature} selected = {props.selected}/>
          );
        });
  
        // return (
        //   <fieldset className="feature" key={featureHash}>
        //     <legend className="feature__name">
        //       <h3>{feature}</h3>
        //     </legend>
        //     {options}
        //   </fieldset>
        // );
        return(
            <RenderOptions featureHash = {featureHash} feature = {feature} options = {options}/>
        )
        
    });
    // return(
    //     <form className="main__form">
    //         <h2>Customize your laptop</h2>
    //         {features}
    //     </form>
    // )
    return(
        <RenderFeatures features ={features}/>
    )
}

export default SelectFeatures;