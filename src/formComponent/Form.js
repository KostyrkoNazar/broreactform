import React, {useState} from 'react';
import Input from "../inputComponent/Input";
import SubmitButton from "../buttonComponent/SubmitButton";

function Form(props) {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    const onSubmit= ()=> {
        alert('email ' + email + ' password ' + password);
    };

    return(
        <form onSubmit={onSubmit}>
            <Input
                    type='email'
                   placeholder='email'
                   name='email'
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
            />
            <Input
                    type='password'
                   placeholder='password'
                   name='password'
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
            />
            <SubmitButton label='Submit'/>
        </form>
    )
}
export default Form