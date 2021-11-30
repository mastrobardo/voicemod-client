import { Modal, Box, Typography, Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import useSound from "use-sound";
import { useAppDispatch } from "../../app/hooks";
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
    const { data } = soundsApi.endpoints.getSound.useQuery(id, {
            skip: Boolean(id) === false
        });
    const dispatch = useAppDispatch();
    const [play] = useSound('sounds/sound.mp3');
    const onCloseHandler = () => dispatch(unsetModalId());
    const onClickSoundHandler = () => {
        if(data) {
            dispatch(soundsApi.endpoints.updateSound.initiate(data._id));
            play();
        }
    }
    return (
            data ? 
            <Modal
            open={open}
            onClose={() => onCloseHandler()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style} >
            <Card data-id={data._id}>
                <CardMedia
                    component="img"
                    height="140"
                    image={data.icon}
                    alt={data.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h2" component="div">
                    {data.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                    Playbacks: {data.playbacks}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                    Price: {data.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => onClickSoundHandler()}> listen Sound</Button>
                </CardActions>
                </Card>
            </Box>
            </Modal> : <></>
            )
}