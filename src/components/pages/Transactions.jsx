import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import NavBar from "../UI/organisms/NavBar.jsx"
import TxnsNav from "../UI/molecules/TxnsNav.jsx";
import ListTxnsByDate from "../UI/organisms/ListTxnByDate.jsx";
import GenerateIcon from "../UI/atoms/GenerateIcon.jsx";
import getMonthFirstLastDate from "../../utils/getMonthFirstLastDate.mjs"
import fetcherGet from "../../utils/fetcherGet.mjs"
import useSWR from "swr";

export default function Transactions () {
  const [txns, setTxns] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [month, setMonth] = useState(new Date());

  useEffect(() => {
    setShouldFetch(true)
  }, [month]);

  const {data, error} = useSWR(shouldFetch ? [`http://localhost:3004/transactions?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&sort=txnDate:DESC&txnDateMin=${getMonthFirstLastDate(month).firstDay}&txnDateMax=${getMonthFirstLastDate(month).lastDay}`] : null, fetcherGet);

  if (data) {
    setShouldFetch(false);
    setTxns(data.transactions);
    console.log(data);
  }

  return (
    <Box
    sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        rowGap: '10px',
        width: '80%',
        marginTop: '10vmin'
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <PageHeader pageTitle={`Transactions`} />
        <Box>
          <GenerateIcon name={'tune'} />
          <GenerateIcon name={'sort'} />
        </Box>
      </Box>
      <TxnsNav month={month} setMonth={setMonth}/>
      <ListTxnsByDate txns={txns} />
      <NavBar />
    </Box>
  );
}

