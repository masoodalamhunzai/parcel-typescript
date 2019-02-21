import * as React from 'react';

const EmptySpace = (props) => {
    
    const {space} = props;
      console.log(space);
    return (() => {
        for (let i = 0 ; i<space; i++){
         <span >  &nbsp;</span>
         }
        }
    )
} 

export {EmptySpace}