import React from "react";
// import axios from "axios";
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CategoryAvatar from "../molecules/CategoryAvatar.jsx";
import ListTxnText from "../atoms/ListTxnText.jsx";

export default function ListTxn ({textValue}) {

  return (
    <List dense={true}>
        <ListItem>
          <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <ListItemAvatar>
            <CategoryAvatar categoryName={'fnb'}/>
          </ListItemAvatar>
          <ListTxnText textValue={'test'}/>
          </Box>
          <Box>
            <ListTxnText ege="end" textValue={'$34'}/>
          </Box>
        </ListItem>,
    </List>  
  );
};