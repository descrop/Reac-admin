// in src/App,js
import React from 'react';
import {withStyles } from '@material-ui/core/styles';
import LaunhIcon from '@material-ui/icons/Launch';

const styles = {
  link: {
    textDecoration: 'none',
  },
  icon: {
    width:'0.5em',
    paddingLeft: 2,
  },
};

 const MyUrlField = ({ record = {}, source, classes}) =>
  <a href={record[source]} className={ classes.link}>
  {record[source]}
  <LaunhIcon className={classes.icon} />
  </a>;
export default withStyles(styles)(MyUrlField);
