import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Sound } from '../MainView/main-view.types';
import { useAppDispatch } from '../../app/hooks';
import { setModalId } from '../SoundDetails/sound-details.slice';

export const MediaCard: React.FC<Sound> = ({ _id, name, icon }) => {
  const dispatch = useAppDispatch();
  const id = _id;
  const onClickHandler = (id: string) => {
    return dispatch(setModalId({id}))
  }

  return (
    <Card data-id={_id}>
      <CardMedia
        component="img"
        height="140"
        image={icon}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onClickHandler(id)}> Open Details</Button>
      </CardActions>
    </Card>
  );
}