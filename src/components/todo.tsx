import * as React from 'react';
import {Todos} from './todo/Todo';
import {Form} from './form/form';


const Todo = () => {
    return (
        <div className="content-wrapper">
            <div className="todo-content" id="content">
                <Todos />     
            </div>        
        </div>
        
         
    )
}

export {Todo}