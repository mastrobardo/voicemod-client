import { Modal, Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { onPropsChanged } from "../../hooks/react.hooks";
import { soundsApi } from "../MainView/main-view.service";
import { unsetModalId } from "./sound-details.slice";

type SoundDetailsModal = {
    id: string;
    open: boolean;
}


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const SoundDetails = ({ id, open } :SoundDetailsModal) => {
    let details: any;
    try {
        details = soundsApi.endpoints.getSound.useQuery(id, {
            skip: Boolean(id) === false
        });
    } catch(e) {

    }
    const dispatch = useAppDispatch();
    const onCloseHandler = () => dispatch(unsetModalId());

    onPropsChanged([details], () => {
        console.log('DETAILS', details.data)
    })
    
    return (
            details.data ? 
            <Modal
            open={open}
            onClose={() => onCloseHandler()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style} >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {details.data.price}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {details.data.name}
                </Typography>
            </Box>
            </Modal> : <></>
            )
}