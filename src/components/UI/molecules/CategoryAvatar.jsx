import React from "react";
import Avatar from '@mui/material/Avatar';
import GenerateIcon from "../atoms/GenerateIcon";
import { green, deepPurple } from '@mui/material/colors';

export default function CategoryAvatar ({categoryName}) {

  const categories = [
    {
      name: 'transport',
      color: green[500],
      icon: 'directions_car_icon',
    },
    {
      name: 'fnb',
      color: deepPurple[500],
      icon: 'restaurant',
    }
  ]

  const category = categories.filter(category => category.name === categoryName);

  return (
      <Avatar sx={{ bgcolor: category[0].color }}>
        <GenerateIcon name={category[0].icon} />
      </Avatar>
  );
}
