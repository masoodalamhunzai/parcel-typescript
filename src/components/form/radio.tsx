import * as React from 'react';

const RadioGroup = ({values, selected, name})=>{

    return values.map(item => {
        return (
            <div className="gender">
                <input 
                  defaultChecked={selected == item.value}
                  type="radio"
                  name={name} 
                  value={item.value} 
                 />
                 <label>{item.label}</label>
            </div>
        );
    });
};

export {RadioGroup}