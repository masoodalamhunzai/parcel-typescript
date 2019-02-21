import * as React from 'react';
import {FormItems} from './formItems';
import {RadioGroup} from './radio';
import {CheckboxGroup} from './checkbox';
 
class Form extends React.Component{

    state = {
       
            firstName: '',
            lastName: '',
            email: '',
            gender:'',
            address: '',
            fatherName: '',
            hobbies:[],
            university: '',
            error:false
       
    }
    submitform = (e)=>{
        e.preventDefault();
        this.validation();
    }
    setStateValue = (e) =>{
        const inputValue = e.target.value;
        if(inputValue){
        const inputName = e.target.name;
        let {value,name,type,checked} = inputValue;
        if(['hobbies'].includes(name)){
            const arr = [...this.state[name]];
            if(checked){
                arr.push(value);
            }else{
                const index = arr.indexOf(value);
                 if(index > -1){
                     arr.splice(index,1);
                 }
            }    
            this.setState({                           
               [name] : arr
            });    
            return true;           
        }
        if(type == "checkbox"){
            value = checked;
        }
        this.setState({
            [inputName] :inputValue
        })
      }
    }
    validation = () => {
        const { firstName,lastName,email,gender,address,fatherName,university } = this.state;
     
        if(firstName == '' || lastName == '' || email == '' || gender == '' || address == '' || fatherName == ''  || university == ''){
            this.setState({
                error :true
            })
        }else{
            this.setState({
                error: false
            })
        }
    }
 printData(){
     return (

        <table className="reg-table">
        <thead>
            <tr>       
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Father Name</th>
            <th>Hobbies</th>
            <th>Universities</th>
            </tr>
            </thead>
            {   
             <FormItems fname={this.state.firstName} lname={this.state.lastName} email={this.state.email} gender={this.state.gender} address={this.state.address} fthname={this.state.fatherName} hobbies={this.state.hobbies} university={this.state.university} />                                           
            }
            </table>
     )
 }

    render(){

        return(
        <div>
            <h2>Registration Form</h2>
        <form onSubmit= {this.submitform} className="form" onChange ={this.setStateValue}>
           <label htmlFor="">first name :</label>
           <input type="text" id="input" name="firstName"  /><br />
           <span> {this.state.error ? "Please enter some value" :""}</span>
           
           <label htmlFor="">last name :</label>
           <input type="text" id="input" name="lastName"  />
           <span> {this.state.error ? "Please enter some value" :""}</span>

           <label htmlFor="">Email :</label>
           <input type="text" id="input" name="email"  />
           <span> {this.state.error ? "Please enter some value" :""}</span>

           <label htmlFor="">gender :</label> 
           <RadioGroup 
              values={[
               {value:'female',label:'Female'},
               {value:'male',label:'Male'}
            ]} 
           selected={this.state.gender} 
           name="gender"
           />

           <label htmlFor="">address:</label>
           <textarea id="input" rows="5" name="address"  />
           <span> {this.state.error ? "Please enter some value" :""}</span>

           <label htmlFor="">father name :</label>
           <input type="text" id="input" name="fatherName"  />
           <span> {this.state.error ? "Please enter some value" :""}</span>

            <CheckboxGroup 
            values={['Cricket','Football','Reading','Vollyball']}
            selected={this.state.hobbies}
            label='hobbies:'
            name='hobbies'
            />

           <label htmlFor="">University :</label>
            <select name="university" id="input">
            <option value="Select" >Select</option>
            <option value="Karakoram International University" >KIU</option>
            <option value="Aga Khan University" >AKU</option>
            <option value="Ghulam Ishaq Khan University" >GIK</option>
            </select>

            <input type="submit" value="Registration" className="reg-btn"/>
           </form>

           {this.printData()}

           </div>
        )

    }
}
export {Form}