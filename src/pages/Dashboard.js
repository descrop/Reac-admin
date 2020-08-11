import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import Icon from '@material-ui/icons/LocalHospital';




const cardStyles = {
      background: '#7ac6f7',
    color: 'black'

};
const cardStyless = {
    color: 'white',
    width: 300,
    minHeight: 380,
    margin: '0.5em',
    verticalAlign: 'center'
};

export default () => (
    <Card style={cardStyles}>
        <CardContent> <h1>Hospital Admin</h1> </CardContent>
      <center>  <Icon style={cardStyless}>star</Icon></center>
        <CardContent><center><h3>Ayudar es nuestra misión</h3></center></CardContent>
    </Card>
);
document.body.style = 'background: #255;';
