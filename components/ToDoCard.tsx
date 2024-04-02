'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function ToDoCard() {


  return (
    <Card sx={{ maxWidth: 345 }} className='m-2 max-h-56'>
      <CardContent >
        <Typography variant="h6" color="text.primary" className='line-clamp-1 mb-2'>
          Really really long, Even more long Todo title
        </Typography>
        <Typography variant="body2" color="text.secondary" className='h-16 line-clamp-3'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="complete">
          <CheckCircleIcon className='hover:text-green-400'/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon className='hover:text-blue-700'/>
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon className='hover:text-red-500'/>
        </IconButton>
      </CardActions>

    </Card>
  );
}
