import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box"
import TxnForm from "../UI/organisms/TxnForm.jsx";
import GenerateIconLarge from "../UI/atoms/GenerateIconLarge.jsx";
import NavBar from "../UI/organisms/NavBar.jsx"
import PrimaryBtn from "../UI/atoms/PrimaryBtn.jsx";
import axios from "axios";
import DeleteAlertDialog from "../UI/molecules/DeleteAlertDialog.jsx";
import fetcher from "../../utils/fetcher.mjs";
import useSWR from "swr";
import AlertSnackbar from "../UI/atoms/AlertSnackbar.jsx";

export default function NewTxnForm () {
  const [showDialog, setShowDialog] = useState(false);

  const [shouldFetch, setShouldFetch] = useState(false); 

  const [photo, setPhoto] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [amount, setAmount] = useState("0.00");
  const [txnDate, setTxnDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [shouldPost, setShouldPost] = useState(false); 
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setShouldFetch(true);
  }, [isSuccess])

  const txnId = window.location.pathname.split('/')[2];
  
  let navigate = useNavigate();

  const onFetchSuccess = (data) => {
    if (data) {
      setShouldFetch(false);
      setAmount(data.amount);
      setTxnDate(new Date(data.txnDate));
      setTitle(data.title);
      setCategoryId(data.categories[0].id);
      setImageUrl(data.imageUrl);
      setPhoto(null);
    }
  }

  useSWR(shouldFetch ? `${process.env.REACT_APP_BACKEND_URL}/transactions/${txnId}` : null, fetcher.get, { onSuccess: onFetchSuccess });

  const handleTxnDelete = () => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/transactions/${txnId}`)
      .then(({ data }) => {
        if(data.success) navigate("/txns", { replace: true, state: {txnDeleteSuccess: true}});
      })
  }

  const getReqBody = () => {
    if (imageUrl && !photo) return { amount, txnDate, title, categoryId };
    return { photo, amount, txnDate, title, categoryId };
  }

  const onSuccess = (data) => {
    setShouldPost(false);
    if (data.success) {
      setIsSuccess(true);
    }
  }

  const onError = (error) => {
    setShouldPost(false);
  }

  useSWR(shouldPost ? [`${process.env.REACT_APP_BACKEND_URL}/transactions/${txnId}`, getReqBody()] : null, fetcher.putMultipart, {onSuccess, onError});

  return (
    <Box
      sx={{
          display: 'inline-flex',
          flexDirection: 'column',
          rowGap: '10px',
          width: '80%',
          justifyContent: 'center',
          marginTop: '-10%'
        }}
      >
      <GenerateIconLarge name={'paid'}/>
      <TxnForm isEditForm={true} photo={photo} setPhoto={setPhoto} amount={amount} setAmount={setAmount} txnDate={txnDate} setTxnDate={setTxnDate} title={title} setTitle={setTitle} categoryId={categoryId} setCategoryId={setCategoryId} imageUrl={imageUrl} setShouldPost={setShouldPost}/>
      <NavBar />
      {txnId !== "add" && <PrimaryBtn buttonLabel={'Delete'} buttonColorPalette={'error'} onClickCallback={()=>{setShowDialog(true)}} />}
      {showDialog && <DeleteAlertDialog handleDeleteConfirmation={handleTxnDelete} showDialog={showDialog} setShowDialog={setShowDialog} />} 
      {isSuccess && <AlertSnackbar alertSeverity={'success'} alertLabel={'Edit transaction success'} displayAlert={true}/>}
    </Box>
      
  );
}

