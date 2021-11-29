import React from "react";
import { soundsApi } from "./main-view.service";
import { Sound } from "./main-view.types";
import { Grid } from "@mui/material";

export const MainView: React.FC = () => {
    const result = soundsApi.endpoints.getSounds.useQuery();

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
          {result && result.data?.length && result.data.map((ele:Sound, idx: number) => {
                return (
                    <div key={idx}>
                        <span>{ele._id}</span>
                    </div>
                )
            })}  
        </Grid>
        // <div className={'main-view'}>
        //     {result && result.data?.length && result.data.map((ele:Sound, idx: number) => {
        //         return (
        //             <div key={idx}>
        //                 <span>{ele._id}</span>
        //             </div>
        //         )
        //     })}
        // </div>
    )
}