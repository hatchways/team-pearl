import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

export interface ModalProps {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
}

export default function BoardModal({ open, handleClose }: ModalProps): JSX.Element {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            height: 200,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box sx={{ marginLeft: 2, textAlign: 'center' }}>
            <Typography id="modal-modal-title" sx={{ marginBottom: 2 }} variant="h6" component="h2">
              Create new board
            </Typography>
            <TextField required id="outlined-required" type="text" defaultValue="Add Title" />
            <br></br>
            <Button sx={{ marginTop: 2 }} variant="contained">
              Create
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
