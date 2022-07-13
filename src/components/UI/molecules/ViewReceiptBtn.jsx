import React, {useState} from "react";
import Box from "@mui/material/Box"
import { Button } from "@mui/material";
import GenerateIcon from "../atoms/GenerateIcon.jsx";
import PrimaryBtn from "../atoms/PrimaryBtn.jsx";
import Modal from '@mui/material/Modal';


export default function ViewReceiptBtn ({ photo, setPhoto, imageUrl }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  if (imageUrl) {
    return (<Box>
      <PrimaryBtn buttonLabel={'View Receipt'} buttonColorPalette={'secondary'} icon={'image'} onClickCallback={handleOpenModal} />
      <Modal
        open={showModal}
        onClose={handleCloseModal}
      >
        <Box sx={style}>
          <img src={imageUrl} style={{maxWidth: '80vw', maxHeight: '90vh'}}/>
        </Box>
      </Modal>
    </Box>)
  }

  const handleFileUpload = (e) => {
    setPhoto(e.target.files[0]);
  }

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
          {photo ? `${photo.name}`: "Upload Receipt"}
        </Button>
      </label>
        
    </Box>
  );
}

