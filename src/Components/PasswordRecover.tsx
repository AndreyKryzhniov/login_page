import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendRecoveryPasswordRequest } from '../redux/passwordRecoveryReducer';



const PasswordRecover: React.FC = () => {
  const [emailValue , setEmailValue] = useState('')
  const dispatch = useDispatch()
  let sendEmailValue = (e:any) =>{
    setEmailValue(e.currentTarget.value)
  }
  const sendRecoveryPassword = () =>{

    debugger
      dispatch(sendRecoveryPasswordRequest(emailValue))
  }
  
  return (
    <div>
        <div>Forgot password</div>
        <input onChange = {sendEmailValue}></input>
        <button onClick = {sendRecoveryPassword}>Send request</button>
    </div>
  );
}

export default PasswordRecover;
