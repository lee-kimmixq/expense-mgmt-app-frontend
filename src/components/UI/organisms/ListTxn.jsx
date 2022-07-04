import React from "react";
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CategoryAvatar from "../molecules/CategoryAvatar.jsx";
import ListTxnText from "../atoms/ListTxnText.jsx";

export default function ListTxn ({txns}) {

  const txnList = txns.length === 0 ? <p>No Transactions Available</p> : txns.map((txn) => (
    <ListItem
      disableGutters
      secondaryAction={
        <ListTxnText ege="end" textValue={`$${txn.amount}`}/>
      }
      key={`txn${txn.id}`}
    >
      <Link to={`/txns/${txn.id}`}>
        <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <ListItemAvatar>
            <CategoryAvatar categoryName={txn.categories[0].name}/>
          </ListItemAvatar>
          <ListTxnText textValue={txn.title}/>
        </Box>
      </Link>
    </ListItem>
  ));

  return (
    <List dense>
        {txnList}
    </List>  
  );
};