import React from "react";
import { soundsApi } from "./main-view.service";
import { Sound } from "./main-view.types";
import { Box, Grid, Paper, styled, Theme } from "@mui/material";
import { makeStyles, withTheme } from "@mui/styles";
import {MediaCard} from "../Card/Card";


export const MainView: React.FC = () => {
    const result = soundsApi.endpoints.getSounds.useQuery();
    return (
        <Grid container spacing={3} alignItems="stretch">    
            {result && result.data?.length && result.data.map((ele:Sound, idx: number) => {
                return (
                    <Grid item xs={12} sm={6} lg={3}>
                        <MediaCard {...ele} />
                    </Grid>
                )
            })}  
        </Grid>
    )
}