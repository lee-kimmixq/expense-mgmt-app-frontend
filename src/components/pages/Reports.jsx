import React, { useState } from "react";
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import Box from "@mui/material/Box"
import NavBar from "../UI/organisms/NavBar.jsx";
import TxnsNav from "../UI/molecules/TxnsNav.jsx";
import ReportsNav from "../UI/molecules/ReportsNav.jsx";
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';
import ChartPie from "../UI/atoms/ChartPie.jsx"
import useTxns from "../../utils/useTxns.js";
import Loading from "../pages/Loading.jsx"
import useReports from "../../utils/useReports.js";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar} from 'recharts';

export default function Reports () {
  const [month, setMonth] = useState(new Date());
  const [tabFocus, setTabFocus] = useState("day");

  const { data: reportData, isLoading: isRepLoading } = useReports("month", month, tabFocus);
  const { data: expenseData, isLoading: isExpLoading } = useTxns("reports", "expenses", tabFocus, month);
  const { data: incomeData, isLoading: isIncLoading } = useTxns("reports", "income", tabFocus, month);

  if (isRepLoading || isExpLoading || isIncLoading) return <Loading />;

  // format reportData
  const newData = reportData.map((day) => {return {...day, date: new Date(day.date).getDate()}});
  const maxSum = Math.max(...reportData.map((day) => day.sum));
  console.log(newData);
  
  return (
    <Box
    sx={{
      display: 'inline-flex',
        flexDirection: 'column',
        rowGap: '10px',
        width: '80%',
        marginTop: '10vmin'
      }}
    >
    <PageHeader pageTitle={`Reports`} />
    <TxnsNav month={month} setMonth={setMonth}/>
    <ReportsNav setTabFocus={setTabFocus} tabValue={tabFocus}/>

    <Box sx={{
      width: '100%',
      height: 300,
      marginBottom: '15px'
      }}>
      <ResponsiveContainer width='100%' height='100%' >
        <BarChart width="100%" height="100%" data={newData}>
          <XAxis dataKey="date" />
          <YAxis type="number" domain={[0, maxSum]} hide/>
          <Bar dataKey="sum" fill="#8884d8"/>
        </BarChart>
      </ResponsiveContainer>
    </Box>

    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Link to={`/breakdown`} style={{ textDecoration: 'none' }} className={'link'}>
          <Box sx={{
            height: 150,
            backgroundColor: '#CF65F2',
            display: "flex",
            alignItems: "center"}}>
              <ChartPie data={expenseData.breakdown.map((category) => { return {...category, total: Number(category.total)}})} hasTooltip={false}/>
          </Box>
          <p style={{marginBottom: 0, fontWeight: 'bold'}}>Expense</p>
          <p style={{marginTop: 0}}>$ {expenseData.totalAmount}</p>
        </Link>
      </Grid>

      <Grid item xs={6}>
          <Link to={`/breakdown`} style={{ textDecoration: 'none' }} className={'link'}>
            <Box sx={{
              height: 150,
              backgroundColor: '#27A37A',
              display: "flex",
              alignItems: "center"}}>
              <ChartPie data={incomeData.breakdown.map((category) => { return {...category, total: Number(category.total)}})} hasTooltip={false}/>
            </Box>
            <p style={{marginBottom: 0, fontWeight: 'bold'}}>Income</p>
            <p style={{marginTop: 0}}>$ {incomeData.totalAmount}</p>
          </Link>
        </Grid>
    </Grid>   
    <NavBar />
  </Box>
  );
}

