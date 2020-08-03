import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import Menubar from './menubar';
import MenuIcon from '@material-ui/icons/Menu';
import desktopImage from './../Asset/destop.jpg';
import mobileImage from './../Asset/mobile.jpg';
import Fade from 'react-reveal/Fade';


const DestopStyles = {

    menuButton: {
        fontSize: 60,
        margin: 30,
        right: 5,
        width: 100,
        top: 10,
        position: "absolute",
        color: 'primary',
    }

};

const MobileStyles = {

    menuButton: {
        fontSize: 40,
        color: 'primary',
        margin: 30,
        right: 1,
        width: 40,
        top: 10,
        position: "absolute"
    }

};


const LandingPage = () => {


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;
    const styles = useWindowWidth() >= 650 ? DestopStyles : MobileStyles;

    return (
        <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>


            <MenuIcon color="initial" style={styles.menuButton} onClick={handleClickOpen} />
            {open ?
                <Menubar open={open}
                    onClose={handleClose} />
                : null}
            <Fade right>
                <div className="App-content">
                    <h1>Company Name</h1>
                    <p>Company headline</p>
                </div>
            </Fade>

        </div>
    );
};

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return windowWidth;
};

export default LandingPage;


