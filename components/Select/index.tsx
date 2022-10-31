import React, { useEffect, useState } from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import  { citys, coutrys } from '../../services/api';

const animatedComponents = makeAnimated();



const dataCoutry = coutrys.map(function(item){
    return { value: item.name, label: item.name };
});

const dataCitys = citys.map(function(item){
    return { value: item.name, label: item.name };
});






export function AnimatedMulti() {
  return (
    <div>
     <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti

      options={
       dataCoutry
      }
    
    />
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti

      options={
       dataCitys
      }
    
    />
    
    
    </div>
    
  );
}