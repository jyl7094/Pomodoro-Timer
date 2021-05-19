import { makeStyles } from '@material-ui/styles'

export default makeStyles(() => ({
    pad: {
        padding: '20px 0'
    },
    btn_size: {
        width: '80.4375px'
    },
    timer_size: {
        fontSize: '6.5rem'
    },
    fade_in: {
        opacity: '1',
        width: '100px',
        height: '100px',
        transition: 'width 0.5s, height 0.5s, opacity 0.5s 0.5s'
    },
    fade_out: {
        opacity: '0',
        width: '0',
        height: '0',
        transition: 'width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s'
    }
}));