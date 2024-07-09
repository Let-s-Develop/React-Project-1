import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Container, Box, Button, Modal, IconButton, Drawer, List, ListItem, ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import StarRating from './StarRating';
import logo from './my_logo.png';
import './App.css';


const ReusableModal = ({ open, handleClose, content }) => (
  <Modal open={open} onClose={handleClose}>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '80%', sm: '60%', md: '40%' },
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}
    >
      {content}
    </Box>
  </Modal>
);

const App = () => {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const projectSteps = (
    <Box>
      <Typography variant="h6" gutterBottom>Step-by-Step Guide to Create the Project</Typography>
      <Typography variant="subtitle1" gutterBottom>Step 1: Set up the Project</Typography>
      <Typography variant="body1" gutterBottom>
        - Install Node.js and npm.<br />
        - Create a new React project using `create-react-app`.<br />
        - Install Material-UI for UI components: `npm install @mui/material @emotion/react @emotion/styled`.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>Step 2: Create Components</Typography>
      <Typography variant="body1" gutterBottom>
        - Create the `StarRating` component using Material-UI's `Rating`.<br />
        - Create the `ReusableModal` component for a reusable modal with open and close functionality.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>Step 3: Structure the App</Typography>
      <Typography variant="body1" gutterBottom>
        - Set up the `AppBar` with the logo and title.<br />
        - Integrate the `StarRating` component and add a button to open the modal.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>Step 4: Add Functionality</Typography>
      <Typography variant="body1" gutterBottom>
        - Add state management for the modal open/close functionality.<br />
        - Style the components using Material-UI's `sx` prop and CSS classes.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>Step 5: Test the Application</Typography>
      <Typography variant="body1" gutterBottom>
        - Run the application using `npm start`.<br />
        - Ensure all components are rendered correctly and functionality works as expected.
      </Typography>
    </Box>
  );

  return (
    <div>
      <AppBar position="static" color="info">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    <ListItem button>
                      <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Projects" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="About" />
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                MAHENDRA S
              </Typography>
              <Box sx={{ display: 'flex', gap: '20px' }}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Projects</Button>
                <Button color="inherit">About</Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={4} textAlign="center">
          <img src={logo} alt="logo" style={{ marginBottom: '20px', height: '200px' }} />
          <Typography variant="h4" color="secondary" gutterBottom>
           Implement Star Rating Functionality
          </Typography>
          <StarRating />
          <Button variant="contained" color="primary" onClick={handleOpen} style={{ marginTop: '20px' }}>
            More Details
          </Button>
        </Box>
      </Container>
      <ReusableModal open={open} handleClose={handleClose} content={projectSteps} />
    </div>
  );
};

export default App;
