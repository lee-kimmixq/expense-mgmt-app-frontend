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
            {/* <Avatar sx={{ bgcolor: '#00FFFFFF', width: 65, height: 65  }}> */}
              <GenerateIcon name={navIcon} scale={'scale(1.5)'} />
            {/* </Avatar> */}
          </ListItemAvatar>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '15px'
          }}>
            
            <ListItemText sx={{
              // fontWeight: 'bold',
              margin: 0,
              
            }}
            primary={navName} />

          </Box>           
          </Box>
      </ListItem>
  )
}