import React from "react";
import Avatar from '@mui/material/Avatar';
import GenerateIcon from "../atoms/GenerateIcon";
import categories from "../../../utils/categories.js";

export default function CategoryAvatar ({categoryName}) {

  const category = categories.filter(category => category.name === categoryName); 

  return (
      <Avatar sx={{ bgcolor: category[0].color }}>
        <GenerateIcon name={category[0].icon} />
      </Avatar>
  );
}
