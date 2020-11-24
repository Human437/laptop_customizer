import React from 'react';
import slugify from 'slugify';
import RenderFeatures from './RenderFeatures';
import RenderOptions from './RenderOptions';
import EachOption from './EachOption';

function SelectFeatures(props){
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <EachOption itemHash = {itemHash} feature = {feature} item = {item} updateFeature = {props.updateFeature} selected = {props.selected}/>
          );
        });
        return(
            <RenderOptions featureHash = {featureHash} feature = {feature} options = {options}/>
        )
        
    });
    return(
        <RenderFeatures features ={features}/>
    )
}

export default SelectFeatures;