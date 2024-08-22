import Box from '@mui/material/Box';
import { Icon, styled, SvgIconProps, Typography } from '@mui/material';

interface InterestBoxProps {
  title: string;
  desc: string;
  icon: React.ReactElement<SvgIconProps>;
}

const TitleTypography = styled(Typography)({
  fontFamily: 'Montserrat',
  cursor: 'default',
  padding: '10px',
  marginInline: 'auto',
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
