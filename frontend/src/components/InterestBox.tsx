import Box from '@mui/material/Box';
import { styled, Typography } from '@mui/material';
import InterestBoxProps from '../types/InterestBoxProps';

const TitleTypography = styled(Typography)({
  fontFamily: 'Montserrat',
  cursor: 'default',
  padding: '10px',
  marginInline: 'auto',
  textAlign: 'center',
});

const DescTypography = styled(Typography)({
  cursor: 'default',
  fontSize: '12',
  width: '100%',
  marginInline: 'auto',
});

const StyledBox = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',

  minWidth: '100px',
  minHeight: '100px',
  maxHeight: '100vh',
  justifyContent: 'center',
  padding: '10px',
});

function InterestBox({ title, desc, icon }: InterestBoxProps) {
  return (
    <StyledBox>
      {icon}
      <TitleTypography variant="h4">{title}</TitleTypography>
      <DescTypography>{desc}</DescTypography>
    </StyledBox>
  );
}

export default InterestBox;
