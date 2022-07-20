import React from "react";
// import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CategoryAvatar from "../molecules/CategoryAvatar.jsx";
import ListTxnText from "../atoms/ListTxnText.jsx";
import { useNavigate } from 'react-router-dom'
import getFirstLastDates from '../../../utils/getFirstLastDates.mjs';

export default function ListCategory ({ categories, month }) {
  let navigate = useNavigate();

  const { firstDate: txnDateMin, lastDate: txnDateMax } = getFirstLastDates("month", month)

  const catList = categories.length === 0 ? <p>No Transactions Available</p> : categories.map((category) => (
      <ListItem
        disableGutters
        secondaryAction={
          <ListTxnText ege="end" textValue={`$${category.total}`}/>
        }
        key={`cat${category.name}`}
        onClick={()=>{navigate(`/txns`, { replace: true, state: { month: month, linkedFilters: { categories: [category], txnDateMin, txnDateMax } }})}}
      >
          <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <ListItemAvatar>
              <CategoryAvatar categoryName={category.name}/>
            </ListItemAvatar>
            <ListTxnText textValue={category.name}/>
          </Box>
      </ListItem>
  ));

  return (
    <List dense>
        {catList}
    </List>  
  );
};