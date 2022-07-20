import React, { useState } from "react";
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import Box from "@mui/material/Box"
import NavBar from "../UI/organisms/NavBar.jsx";
import TxnsNav from "../UI/molecules/TxnsNav.jsx";
import ReportsNav from "../UI/molecules/ReportsNav.jsx";
import { Grid } from "@mui/material";
import ChartPie from "../UI/atoms/ChartPie.jsx"
import useTxns from "../../utils/useTxns.js";
import getTxnQueryParams from "../../utils/getTxnQueryParams.js";
import Loading from "../pages/Loading.jsx"
import useReports from "../../utils/useReports.js";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar} from 'recharts';
import { useNavigate } from "react-router-dom";

export default function Reports () {
  let navigate = useNavigate();

  const [month, setMonth] = useState(new Date());
  const [tabFocus, setTabFocus] = useState("day");

  const { data: reportData, isLoading: isRepLoading } = useReports(tabFocus, month);
  const { data: expenseData, isLoading: isExpLoading } = useTxns(getTxnQueryParams("reports", "expenses", "month", month));
  const { data: incomeData, isLoading: isIncLoading } = useTxns(getTxnQueryParams("reports", "income", "month", month));

  if (isRepLoading || isExpLoading || isIncLoading) return <Loading />;

  // format reportData
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  let newData = {};
  if (tabFocus === "day") {
    newData = reportData.map((day) => {return {...day, date: new Date(day.date).getDate()}});
  } else if (tabFocus === "week") {
    newData = reportData.map((day) => {return {...day, date: `${new Date(day.date).getDate().toString()}/${Number(new Date(day.date).getMonth()) + 1}`}});
  } else if (tabFocus === "month") {
    newData = reportData.map((day) => {return {...day, date: `${monthNames[new Date(day.date).getMonth()]}`}});
  }

  const handleBarClick = (data) => {
    let txnDateMin, txnDateMax;
    let monthToShow = month;
    if (tabFocus === "day") {
      txnDateMin = new Date(month.getFullYear(), month.getMonth(), data.date);
      txnDateMax = new Date(month.getFullYear(), month.getMonth(), data.date);
    } else if (tabFocus === "week") {
      const [dayFromDate, monthFromDate] = data.date.split('/');
      txnDateMin = new Date(month.getFullYear(), monthFromDate - 1, dayFromDate);
      txnDateMax = new Date(month.getFullYear(), monthFromDate - 1, dayFromDate);
      txnDateMax.setDate(txnDateMax.getDate() + 6);
    } else if (tabFocus === "month") {
      const monthNum = monthNames.indexOf(data.date);
      txnDateMin = new Date(month.getFullYear(), monthNum, 1);
      txnDateMax = new Date(month.getFullYear(), monthNum + 1, 0);
      monthToShow = txnDateMin;
    }
    txnDateMin.setHours(0, 0, 0, 0);
    txnDateMax.setHours(23, 59, 59, 999);
    navigate(`/txns`, { replace: true, state: { month: monthToShow, linkedFilters: { categories: [], txnDateMin, txnDateMax } }});
  }

  const maxSum = Math.max(...reportData.map((day) => day.sum));

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
          <XAxis dataKey="date" tickSize={'0'} tickMargin={'5'} tick={{fontSize: '0.7em'}}/>
          <YAxis type="number" domain={[0, maxSum]} hide/>
          <Bar dataKey="sum" fill="#8f49f8" onClick={handleBarClick} />
        </BarChart>
      </ResponsiveContainer>
    </Box>

    <Grid container spacing={2}>
      <Grid item xs={6}>
          <Box sx={{
            height: 150,
            display: "flex",
            alignItems: "center"}}
            onClick={()=>{navigate(`/breakdown`, { replace: true, state: { month: month, tabFocus: "expenses" }})}}
            >
              <ChartPie data={expenseData.breakdown.map((category) => { return {...category, total: Number(category.total)}})} hasTooltip={false}/>
          </Box>
          <p style={{marginBottom: 0, fontWeight: 'bold'}}>Expense</p>
          <p style={{marginTop: 0}}>$ {expenseData.totalAmount}</p>
      </Grid>

      <Grid item xs={6}>
            <Box sx={{
              height: 150,
              display: "flex",
              alignItems: "center"}}
              onClick={()=>{navigate(`/breakdown`, { replace: true, state: { month: month, tabFocus: "income" }})}}
              >
              <ChartPie data={incomeData.breakdown.map((category) => { return {...category, total: Number(category.total)}})} hasTooltip={false}/>
            </Box>
            <p style={{marginBottom: 0, fontWeight: 'bold'}}>Income</p>
            <p style={{marginTop: 0}}>$ {incomeData.totalAmount}</p>
        </Grid>
    </Grid>   
    <NavBar />
  </Box>
  );
}

