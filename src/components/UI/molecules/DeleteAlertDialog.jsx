import * as React from 'react';
import AlertDialog from '../atoms/AlertDialog';

export default function DeleteAlertDialog ({handleDeleteConfirmation, handleCancellationDelete, showDialog, setShowDialog}) {

  return (
    <AlertDialog 
      handleOpen={showDialog}
      setHandleOpen={setShowDialog}
      name={'deleteConfirmation'}
      handleConfirm={handleDeleteConfirmation}
      alertDescription={'Delete this transaction?'}
      yesBtnLabel={'Yes'} 
      noBtnLabel={'No'}
    />
  )
};