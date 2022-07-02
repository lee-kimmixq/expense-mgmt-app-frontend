import React from "react";
// import axios from "axios";
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CategoryAvatar from "../molecules/CategoryAvatar.jsx";
import ListTxnText from "../atoms/ListTxnText.jsx";

export default function ListTxn () {

  const testTxns = [
    {
      id: 1,
      catName: 'fnb',
      txnName: 'KFC',
      amount: '$34',
    },
    {
      id: 2,
      catName: 'transport',
      txnName: 'Grab',
      amount: '$11',
    },
  ]

  const txnList = testTxns.length === 0 ? <p>No Transactions Available</p> : testTxns.map((txn) => (
    <ListItem
          disableGutters
          secondaryAction={
            <ListTxnText ege="end" textValue={txn.amount}/>
          }
          key={`txn${txn.id}`}
        >
          <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <ListItemAvatar>
              <CategoryAvatar categoryName={txn.catName}/>
            </ListItemAvatar>
            <ListTxnText textValue={txn.txnName}/>
          </Box>
        </ListItem>
  ));

  return (
    <List dense>
        {txnList}
    </List>  
  );
};