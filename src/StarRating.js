import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const StarRating = () => {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <Rating
        name="star-rating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography mt={2}>Rating: {value}</Typography>
    </Box>
  );
};

export default StarRating;
