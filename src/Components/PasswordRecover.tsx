import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendRecoveryPasswordRequest } from '../redux/passwordRecoveryReducer';



const PasswordRecover: React.FC = () => {
  let [emailValue , setEmailValue] = useState(false)
  const dispatch = useDispatch()
  let sendEmailValue = (e:any) =>{
    setEmailValue(e.currentTarget.value)
  }
  const sendRecoveryPassword = () =>{
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
