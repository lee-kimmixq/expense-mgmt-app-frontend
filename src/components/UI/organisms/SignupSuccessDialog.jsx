import * as React from 'react';
import OneBtnAlertDialog from '../atoms/OneBtnAlertDialog';

export default function SignupSuccessDialog ({showDialog, setShowDialog, handleConfirm}) {

  return (
    <OneBtnAlertDialog 
      handleOpen={showDialog}
      setHandleOpen={setShowDialog}
      name={'signupSuccessNotification'}
      handleConfirm={handleConfirm}
      yesBtnLabel={'Close'}
    />
  )
};