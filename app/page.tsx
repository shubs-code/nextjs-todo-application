import * as React from 'react';
import Paper from '@mui/material/Paper';
import ToDoCard from '@/components/ToDoCard';

export default function Home() {
  return (
      <Paper elevation={3} className='grow  px-2 py-3  grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4' >
        {
          [1,1,1,1,1,1,1,1].map(()=><div className='flex items-start justify-center mb-4 sm:mb-1'>
              <ToDoCard/>
            </div>
          )
        }
      </Paper>
  );
}
