import React from "react";
import { ListItem, ListItemAvatar, Avatar, ListItemText, Box } from "@mui/material"
import GenerateIcon from "./GenerateIcon"
import GenerateIconBtn from "./GenerateIconBtn";

export default function AccountProfileHeader ({handleLogOutSubmit, username}) {
  return (
    <ListItem
      disableGutters
      secondaryAction={
        <Box sx={{
          marginRight: '10px'
        }}>
          <GenerateIconBtn name={'logout'}
            onClickCallback={handleLogOutSubmit} scale={'scale(1.6)'}
          />
        </Box>
      }
    >
      <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: '#5948D3', width: 65, height: 65  }}>
            <GenerateIcon name={'account_circle'} color={'#EFEFEF'} scale={'scale(1.9)'} />
          </Avatar>
        </ListItemAvatar>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '15px'
        }}>
          <ListItemText sx={{
            margin: 0,
          }}
          primaryTypographyProps={{
            fontWeight: 'bolder',
          }}
          primary={'Welcome'} />
          <ListItemText sx={{
            margin: 0
          }}
          primary={username} />
        </Box>           
      </Box>
    </ListItem>
  )
}