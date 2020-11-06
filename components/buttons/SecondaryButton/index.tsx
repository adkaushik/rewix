import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  }
}));

type TProps = {
  children?: Node,
  startIcon?: Node,
  endIcon?: Node,
  href?: string,
  onClick?: any
}

const SecondaryButton:React.FC<TProps> = ({ children, startIcon, endIcon, href, onClick }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      startIcon={startIcon}
      endIcon={endIcon}
      href={href}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
