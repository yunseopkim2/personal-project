import React from "react";
import styles from '@/styles/Footer.module.css'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
export function Footer(){
    return (<footer>
                <hr/>
                <Copyright/>
            </footer>
    )
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/yunseopkim2/">
        My Github
      </Link>{' '}
      {new Date().getFullYear()} 
      {'.'}
    </Typography>
  );
}