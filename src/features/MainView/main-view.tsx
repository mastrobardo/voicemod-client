import React, { useEffect } from "react";
import { soundsApi } from "./main-view.service";
import { Sound } from "./main-view.types";
import { Box, Grid } from "@mui/material";
import { MediaCard } from "../Card/Card";
import { NoSound } from "../NoSounds/no-sounds";
import { SoundDetails } from "../SoundDetails/sound-details";
import { useAppSelector } from "../../app/hooks";

export const MainView: React.FC = () => {
    const result = soundsApi.endpoints.getSounds.useQuery();
    const hasItems = result && result.data?.length;
    const modalId = useAppSelector((state: any) => state.soundsDetails.modalId);

    useEffect(() => {
        console.log(modalId)
    }, [modalId])

    if(!hasItems) {
        return <NoSound />
    }

    return (
        <Box sx={{ p: 2 }} >
        <SoundDetails id={modalId} open={Boolean(modalId)} />
        <Grid container spacing={3} alignItems="center" justifyContent="center">    
            {hasItems && result?.data?.map((ele:Sound, idx: number) => {
                return (
                    <Grid key={ele._id} item xs={12} sm={6} lg={3}>
                        <MediaCard {...ele} />
                    </Grid>
                )
            })}  
        </Grid>
        </Box>
    )
}