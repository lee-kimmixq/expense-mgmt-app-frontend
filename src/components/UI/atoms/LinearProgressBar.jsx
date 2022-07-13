import { LinearProgress } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';



export default function LinearProgressBar ({totalExp, budgetAmt, categoryColor }) {

  const progressRate = totalExp / budgetAmt * 100;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1, color: categoryColor }}>
        <LinearProgress color='inherit' variant="determinate" value={progressRate} />
      </Box>
      <Box sx={{ minWidth: 35, color: categoryColor }}>
        <Typography variant="body2" color="inherit">{`$${budgetAmt}`}</Typography>
      </Box>
    </Box>
  );
}


