import { Button, Modal, Stack, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const New = () => {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "white",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      };

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
        <Button onClick={handleOpen}>Manage Access</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <p>You can add new plans here.....</p>
            <TextField/>
            <Stack direction="row" spacing={2}>
      <Button>Cancel</Button>
      <Button>Create</Button>
      </Stack>
          </Box>
        </Modal>
    </div>
  )
}
