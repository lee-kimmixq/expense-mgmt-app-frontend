import * as React from 'react';
import AlertDialog from '../atoms/AlertDialog';

export default function DeleteBudgetAlertDialog ({handleDeleteConfirmation, showDialog, setShowDialog}) {

  return (
    <AlertDialog 
      handleOpen={showDialog}
      setHandleOpen={setShowDialog}
      name={'deleteConfirmation'}
      handleConfirm={handleDeleteConfirmation}
      alertDescription={'Delete this budget?'}
      yesBtnLabel={'Yes'} 
      noBtnLabel={'No'}
    />
  )
};