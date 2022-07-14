import React from "react";
import Box from "@mui/material/Box"
import { Button } from "@mui/material";
import GenerateIcon from "../atoms/GenerateIcon.jsx";

export default function UploadReceiptBtn ({ photo, handleFileUpload, buttonText }) {

  return (
    <Box>
      <label htmlFor="contained-button-file">
        <input style={{display: 'none'}} accept="image/*" id="contained-button-file" multiple type="file" onChange={handleFileUpload}/>
        <Button variant="contained" component="span"
        sx={{
          display: 'flex', 
          width: '100%', 
        }}  
        color={'secondary'} 
        startIcon={photo ? <GenerateIcon name={'download_done'} /> : <GenerateIcon name={'upload'} />}>
          {photo ? `${photo.name}`: buttonText}
        </Button>
      </label>
        
    </Box>
  );
}

