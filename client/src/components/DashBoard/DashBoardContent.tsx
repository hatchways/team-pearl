import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { CalendarToday, Dashboard, Menu as MenuIcon, Add } from '@material-ui/icons';
import logo from '../../Images/logo.png';
import userLogo from '../../Images/d9fc84a0d1d545d77e78aaad39c20c11d3355074.png';
import BoardModal, { ModalProps } from '../BoardModal/BoardModal';
import React from 'react';

export default function DashBoardContent(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data: ModalProps = {
    handleClose,
    handleOpen,
    open,
  };
  return (
    <Box>
      <Box>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="transparent" sx={{ pb: 2, pt: 2 }}>
            <Toolbar>
              <div>
                <img src={logo} />
              </div>
              <div
                style={{
                  position: 'absolute',
                  right: '400px',
                }}
              >
                <Button startIcon={<Dashboard />}>Dashboard</Button>
                <Button sx={{ color: 'gray' }} startIcon={<CalendarToday />}>
                  Calendar
                </Button>
              </div>
              <div
                style={{
                  position: 'absolute',
                  right: '5px',
                }}
              >
                <Button onClick={handleOpen} variant="contained" sx={{ bgcolor: '', mr: '10px' }} startIcon={<Add />}>
                  Create Board
                </Button>
                <img width="50px" className="rounded-circle" height="50px" src={userLogo} />
              </div>
              <IconButton size="large" edge="start" color="default" aria-label="menu" sx={{ mr: 2 }}></IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
      <Box>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                My School Board
              </Typography>
              <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}></IconButton>
              <MenuIcon />
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
      <BoardModal {...data} />
    </Box>
  );
}
