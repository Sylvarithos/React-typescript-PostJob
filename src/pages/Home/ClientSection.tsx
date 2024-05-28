import React from "react";
import Grid from '@mui/material/Grid';
function ClientSection() {
    return (
        <Grid
            container
            direction="row-reverse"
            justifyContent="center"
            alignItems="center"
            // spacing={12}
            className="bg-custom-grey p-12 m-0 mt-16 z-0"
        >
            
            <Grid item className="px-10">
                <img src="./images/Home/Clients/4.png"></img>
            </Grid>
            <Grid item className="px-10">
                <img src="./images/Home/Clients/3.png"></img>
            </Grid>
            <Grid item className="px-10">
                <img src="./images/Home/Clients/2.png"></img>
            </Grid>
            <Grid item className="px-10">
                <img src="./images/Home/Clients/1.png"></img>
            </Grid>
        </Grid>
    )
}

export default ClientSection;
