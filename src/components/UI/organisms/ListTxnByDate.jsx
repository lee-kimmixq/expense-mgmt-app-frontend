import React from "react";
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CategoryAvatar from "../molecules/CategoryAvatar.jsx";
import ListTxnText from "../atoms/ListTxnText.jsx";
import TxnDate from "../atoms/TxnDate.jsx";
import { Icon } from "@mui/material";

export default function ListTxnsByDate ({txns}) {
  let previousDate = "";
  const txnList = txns.length === 0 ? <p>No Transactions Available</p> : txns.map((txn) => { 
    const currentDate = new Date(txn.txnDate).toLocaleDateString('en-gb', { year:"numeric", month:"short", day:"numeric"});
    const listItemJsx = (
    <Box key={`txn${txn.id}`}>
      {previousDate !== currentDate && <TxnDate dateValue={new Date(txn.txnDate).toLocaleDateString('en-gb', { year:"numeric", month:"short", day:"numeric"})} />}
      <Link to={`/txns/${txn.id}`} style={{ textDecoration: 'none' }} className={'link'}>
        <ListItem
          disableGutters
          secondaryAction={
            <ListTxnText ege="end" textValue={`$${txn.amount}`}/>
          }
          key={`txn${txn.id}`}
        >
            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
              <ListItemAvatar>
                <CategoryAvatar categoryName={txn.categories[0].name}/>
              </ListItemAvatar>
              <ListTxnText textValue={txn.title}/>
              {txn.imageUrl && <Icon sx={{ color: '#aaa', transform: 'scale(0.55)' }}>{"attach_file"}</Icon>}
            </Box>
        </ListItem>
      </Link>
    </Box> 
    )
    previousDate = currentDate;
    return listItemJsx;
  });

  return (
      <List dense>
          {txnList}
      </List>
  );
};