import React, { useState, useEffect } from 'react';
import './Contact.css';
import "fontsource-roboto";
import { TextField, Typography, Button } from '@material-ui/core';

const DestopStyles = {
    margin: 40
};

const MobileStyles = {
    margin: 25
};


export default function MultilineTextFields() {


    const style = useWindowWidth() >= 650 ? DestopStyles : MobileStyles;


    return (
        <div className='wrapper' >
            <form >
                <div> <Typography className='title' variant="h3" gutterBottom>
                    Contact Us
                </Typography></div>
                <div >
                    <TextField
                        className='input'
                        label="Name"
                        margin="auto"
                        position="left"
                        style={style}
                        id="outlined-size-normal"
                        variant="outlined"


                    />
                    <TextField
                        label="Email"
                        className='input'
                        type="email"
                        margin="auto"
                        style={style}
                        position="right"
                        id="outlined-full-width"
                        variant="outlined"
                    />
                </div>

                <div>

                    <TextField
                        id="filled-full-width"
                        label="Message"
                        style={style}
                        className='inputfull'
                        placeholder="Placeholder"
                        multiline
                        // fullWidth
                        margin="auto"
                        rows="4"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </div>
                <div>
                    <Button variant="contained" style={{ margin: 60 }} color="secondary">
                        Submit
                     </Button>
                </div>
            </form>



        </div>
    );
}
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
