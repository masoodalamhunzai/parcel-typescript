import * as React from 'react';

const CheckboxGroup  = ({values,selected,label,name}) =>{
    return (
        <div className="checkbox">
            <label>{label}</label>
           {values.map(item => {
               const isSelected = selected.includes(item);
               return(
                   <label>
                       <input type="checkbox"
                       value={item}
                       name={name}
                       defaultChecked={isSelected}
                       />{" "}
                       {item}
                   </label>
               );
            })}
        </div>
    );
};

export {CheckboxGroup}