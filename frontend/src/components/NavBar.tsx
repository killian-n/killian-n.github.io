import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';
import { forwardRef } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'inline-flex',
  flex: 1,
  justifyContent: 'end',
});

const StyledButton = styled(Button)({
  display: 'flex',
  color: 'black',
  textTransform: 'none',
});

const buttonItems = {
  '/': 'Home',
  '/#/About': 'About',
  '/#/Portfolio': 'Portfolio',
  '/#/Resume': 'Resume',
};

const renderButtons = () => {
  const buttons = [];
  for (const [key, value] of Object.entries(buttonItems)) {
    buttons.push(
      <StyledButton variant="text" href={key}>
        {value}
      </StyledButton>,
    );
  }
  return buttons;
};

interface Props {}

const NavBar = forwardRef<HTMLElement, Props>(function NavBar(_props, ref) {
  return (
    <AppBar ref={ref} position="fixed" sx={{ zIndex: 1 }}>
      <StyledToolbar>{renderButtons()}</StyledToolbar>
    </AppBar>
  );
});

export default NavBar;
