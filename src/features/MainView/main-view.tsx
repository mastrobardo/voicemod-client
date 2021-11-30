import React, { useEffect } from "react";
import { soundsApi } from "./main-view.service";
import { Sound } from "./main-view.types";
import { Grid } from "@mui/material";
import { MediaCard } from "../Card/Card";
import { NoSound } from "../NoSounds/no-sounds";
import { SoundDetails } from "../SoundDetails/sound-details";
import { useAppSelector } from "../../app/hooks";
// import { selectModalId } from "../SoundDetails/sound-details.slice";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";


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
        <>
        <SoundDetails id={modalId} open={Boolean(modalId)} />
        <Grid container spacing={3} alignItems="stretch">    
            {hasItems && result?.data?.map((ele:Sound, idx: number) => {
                console.log(ele)
                return (
                    <Grid key={ele._id} item xs={12} sm={6} lg={3}>
                        <MediaCard {...ele} />
                    </Grid>
                )
            })}  
        </Grid>
        </>
    )
}