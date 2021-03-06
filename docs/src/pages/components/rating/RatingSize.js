import * as React from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/core/Rating';

export default function HalfRating() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // TODO Replace with Stack
        '& > :not(style) + :not(style)': { mt: 1 },
      }}
    >
      <Rating name="size-small" defaultValue={2} size="small" />
      <Rating name="size-medium" defaultValue={2} />
      <Rating name="size-large" defaultValue={2} size="large" />
    </Box>
  );
}
