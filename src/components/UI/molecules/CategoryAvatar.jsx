import React from "react";
import Avatar from '@mui/material/Avatar';
import GenerateIcon from "../atoms/GenerateIcon";
import { green, deepPurple } from '@mui/material/colors';

export default function CategoryAvatar ({categoryName}) {

  const categories = [
    {
      name: 'Taxi',
      color: green[500],
      icon: 'directions_car_icon',
    },
    {
      name: 'fnb',
      color: deepPurple[500],
      icon: 'restaurant',
    },
    {
      name: 'Shopping',
      color: deepPurple[500], // TODO change colour
      icon: 'shopping_bag',
    },
    {
      name: 'Investments',
      color: deepPurple[500], // TODO change colour
      icon: 'trending_up',
    },
    {
      name: 'Salaries',
      color: green[500], // TODO change colour
      icon: 'work',
    },
  ]

  const category = categories.filter(category => category.name === categoryName);

  return (
      <Avatar sx={{ bgcolor: category[0].color }}>
        <GenerateIcon name={category[0].icon} />
      </Avatar>
  );
}
