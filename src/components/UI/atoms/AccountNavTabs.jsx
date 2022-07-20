import React from "react";
import { ListItem, ListItemAvatar, ListItemText, Box } from "@mui/material"
import GenerateIcon from "./GenerateIcon"
import GenerateIconBtn from "./GenerateIconBtn";

export default function AccountNavTabs ({navName, navIcon}) {
  return (
    <ListItem
        disableGutters
        secondaryAction={
          <Box sx={{
                marginRight: '20px'
              }}>
            <GenerateIconBtn name={'arrow_forward_ios'} color={'#9e9e9e'}
            scale={'scale(0.9)'}
              />
          </Box>
        }
        >
        <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', marginLeft: '20px'}}>
          <ListItemAvatar>
              <GenerateIcon name={navIcon} scale={'scale(1.5)'} />
          </ListItemAvatar>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '15px'
          }}>
            
            <ListItemText sx={{
              margin: 0,
              
            }}
            primary={navName} />

          </Box>           
          </Box>
      </ListItem>
  )
}