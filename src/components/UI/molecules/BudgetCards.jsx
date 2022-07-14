import React from "react";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import { List } from "@mui/material";

export default function BudgetCards ({pinnedBudgets}) {

  const dummyTotalExpense = 200;
  
  const listBudgetCards = pinnedBudgets.length === 0 ? <p>No budgets pinned</p> : pinnedBudgets.map((budget) => {
    const listBudgetCardsJsx = (
      <Grid item xs={4}>
      <Box
        sx={{
          width: 100,
          height: 100
        }}
      >
        <Box sx={{ position: 'relative', display: 'inline-flex', color: budget.categories[0].color }}>
          <CircularProgress variant="determinate" value={100} size={90} thickness={6} color={'light'}/>
          <CircularProgress variant="determinate" value={dummyTotalExpense/budget.amount*100} size={90} thickness={6} color={'inherit'} sx={{position: 'absolute'}}/>
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="caption" component="div" color="text.secondary">
              {`${(dummyTotalExpense/budget.amount*100).toFixed(0)}%`}
            </Typography>
          </Box>
        </Box>
      </Box>
      <p style={{marginTop: 0, fontSize: '0.8em'}}>{budget.categories[0].name}</p>
    </Grid>
    )
    return listBudgetCardsJsx
  })
  
  return (
    <List sx={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      {listBudgetCards}
    </List>
  )
}