import React from "react";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import List from "@mui/material/List";
import useBudgets from "../../../utils/useBudgets.js";
import Loading from "../../pages/Loading"
import categories from "../../../utils/categories.js";

export default function BudgetCards () {

  const { data, isLoading } = useBudgets(true);

  if (isLoading) return <Loading />;
  
  const listBudgetCards = data.budgets.length === 0 ? <p>No budgets pinned</p> : data.budgets.map((budget) => {
    const listBudgetCardsJsx = (
      <Grid item xs={4} key={`budget${budget.id}`}>
      <Box
        sx={{
          width: 100,
          height: 100
        }}
      >
        <Box sx={{ position: 'relative', display: 'inline-flex', color: categories.filter(category => category.name === budget["category.name"])[0].color }}>
          <CircularProgress variant="determinate" value={100} size={90} thickness={6} color={'light'}/>
          <CircularProgress variant="determinate" value={budget.total < budget.amount ? budget.total/budget.amount*100 : 100} size={90} thickness={6} color={'inherit'} sx={{position: 'absolute'}}/>
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
              {`${(budget.total/budget.amount*100).toFixed(0)}%`}
            </Typography>
          </Box>
        </Box>
      </Box>
      <p style={{marginTop: 0, fontSize: '0.8em'}}>{budget['category.name']}</p>
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