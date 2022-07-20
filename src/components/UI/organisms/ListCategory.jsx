import React from "react";
// import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CategoryAvatar from "../molecules/CategoryAvatar.jsx";
import ListTxnText from "../atoms/ListTxnText.jsx";

export default function ListCategory ({categories}) {

  const catList = categories.length === 0 ? <p>No Transactions Available</p> : categories.map((category) => (
      <ListItem
        disableGutters
        secondaryAction={
          <ListTxnText ege="end" textValue={`$${category.total}`}/>
        }
        key={`cat${category.name}`}
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