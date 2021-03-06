import React, { useState } from "react";
import Box from "@mui/material/Box"
import TxnForm from "../UI/organisms/TxnForm.jsx";
import GenerateIconLarge from "../UI/atoms/GenerateIconLarge.jsx";
import NavBar from "../UI/organisms/NavBar.jsx"
import fetcher from "../../utils/fetcher.mjs";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";

export default function NewTxnForm () {

  let navigate = useNavigate();

  const [photo, setPhoto] = useState(null);
  const [amount, setAmount] = useState(null);
  const [txnDate, setTxnDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [shouldPost, setShouldPost] = useState(false); 

  const onSuccess = (data) => {
    setShouldPost(false);
    if (data) navigate(`/txns`, { replace: true, state: {txnAddSuccess: true} });; 
  }

  const onError = (error) => {
    setShouldPost(false);
  }

  useSWR(shouldPost ? [`${process.env.REACT_APP_BACKEND_URL}/transactions`, { photo, amount, txnDate, title, categoryId }] : null, fetcher.postMultipart, {onSuccess, onError});


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
      <GenerateIconLarge name={'paid'} color={'#e0e0e0'} />
      <TxnForm isEditForm={false} photo={photo} setPhoto={setPhoto} amount={amount} setAmount={setAmount} txnDate={txnDate} setTxnDate={setTxnDate} title={title} setTitle={setTitle} categoryId={categoryId} setCategoryId={setCategoryId} setShouldPost={setShouldPost}/>
      <NavBar />
    </Box>
      
  );
}

