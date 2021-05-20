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
                setSeconds(0);
                setMinutes(0);
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

    // const updateTime = () => {
    //     if (minutes === 0 && seconds === 0) {
    //         setSeconds(0);
    //         setMinutes(0);
    //     } else {
    //         if (seconds === 0) {
    //             setMinutes(minutes => minutes - 1);
    //             setSeconds(59);
    //         } else {
    //             setSeconds(seconds => seconds - 1);
    //         }
    //     }
    // };

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);

            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } else {
                    
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000)
    }, [seconds])
    // useEffect(() => {
    //     setInterval(updateTime, 1000);
    // }, [toggle]);

    return (
        <>
            <Grid container justify="center" spacing={0}>
                <Grid item>
                    <ButtonGroup variant="text">
                        <Button onClick={() => { setTimer('Work') }}>
                            <Typography>
                                Working
                            </Typography>
                        </Button>    
                        <Button onClick={() => { setTimer('Short Break') }}>
                            <Typography>
                                Short Break
                            </Typography>
                        </Button>    
                        <Button onClick={() => { setTimer('Long Break') }}>
                            <Typography>
                                Long Break
                            </Typography>
                        </Button>
                    </ButtonGroup>
                </Grid>    
                <Grid className={classes.pad} item xs={12}>
                    <Typography className={classes.timer_size}>
                        {(minutes < 10) ? ("0" + minutes) : minutes}:{(seconds < 10) ? ("0" + seconds) : seconds} 
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.btn_size} variant="text" onClick={() => { toggleTimer() }}>
                        <Typography>
                            { toggle }
                        </Typography>
                    </Button>
                    {toggle === "Pause" && <Button style={{ position: 'absolute' }} onClick={() => { setTimer() }}>
                        <Typography>
                            Skip
                        </Typography>
                    </Button>}
                </Grid>
            </Grid>
        </>
    );
};

export default Timer;