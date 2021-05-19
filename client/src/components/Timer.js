import { useState, useEffect } from 'react';
import { Grid, Button, ButtonGroup, Typography } from '@material-ui/core';
import useStyles from './styles';

const Timer = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [toggle, setToggle] = useState('Start');
    const classes = useStyles();

    const setTimer = (status) => {
        switch (status) {
            case 'Work':
                setSeconds(0);
                setMinutes(25);
                break;
            case 'Short Break':
                setSeconds(0);
                setMinutes(5);
                break;
            case 'Long Break':
                setSeconds(0);
                setMinutes(15);
                break;
            default:
                break;
        }
    };

    const toggleTimer = () => {
        if (toggle === 'Start') {
            setToggle('Pause');
        } else if (toggle === 'Pause' || minutes === 0 && seconds === 0) { //WATCH OUT FOR LOGIC + REVISIT LATER
            setToggle('Start');
        } else {
            setToggle('Start');
        }
    };

    const updateTime = () => {
        if (minutes === 0 && seconds === 0) {
            setSeconds(0);
            setMinutes(0);
        } else {
            if (seconds === 0) {
                setMinutes(minutes => minutes - 1);
                setSeconds(59);
            } else {
                setSeconds(seconds => seconds - 1);
            }
        }
    };

    return (
        <>
            <Grid container justify="center" spacing={0}>
                <Grid item>
                    <ButtonGroup variant="text">
                        <Button onClick={() => { setTimer('Work') }}>Working</Button>    
                        <Button onClick={() => { setTimer('Short Break') }}>Short Break</Button>    
                        <Button onClick={() => { setTimer('Long Break') }}>Long Break</Button>
                    </ButtonGroup>
                </Grid>    
                <Grid className={classes.pad} item xs={12}>
                    <Typography className={classes.timer_size}>
                        {(minutes < 10) ? ("0" + minutes) : minutes}:{(seconds < 10) ? ("0" + seconds) : seconds} 
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.btn_size} variant="text" onClick={() => { toggleTimer() }}>{ toggle }</Button>
                    <Button className={toggle==='Pause'?classes.fade_In:classes.fade_Out}style={{ position: 'absolute' }}>Skip</Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Timer;