import * as React from 'react';


const FormItems = (props)=> {
    const {fname,lname,email,gender,address,fthname,hobbies,university} = props
    return(
        <tbody>
        <tr>
            <td>{fname}</td>
            <td>{lname}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{address}</td>
            <td>{fthname}</td>
            <td>{hobbies}</td>
            <td>{university}</td>
        </tr>    
        </tbody>

    
    )
}
export {FormItems}