import React from 'react';
import slugify from 'slugify';
import RenderFeatures from './RenderFeatures';
import RenderOptions from './RenderOptions';
import EachOption from './EachOption';
import FEATURES from './FEATURES';

function SelectFeatures(props){
    const features = Object.keys(FEATURES).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = FEATURES[feature].map((item,i) => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <EachOption key = {i} itemHash = {itemHash} feature = {feature} item = {item} updateFeature = {props.updateFeature} selected = {props.selected}/>
          );
        });
        return(
            <RenderOptions key = {idx} featureHash = {featureHash} feature = {feature} options = {options}/>
        )
        
    });
    return(
        <RenderFeatures features ={features}/>
    )
}

export default SelectFeatures;