import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Expand ({expandTitle, expandContents}) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{expandTitle}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          display: 'flex'
        }}
      >
        {expandContents}
      </AccordionDetails>
    </Accordion>
  )
}