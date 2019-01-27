import React from 'react';
import Typography from '@material-ui/core/Typography';

const comment = ({comment}) => (
    <Typography
        style={{wordWrap: 'break-word'}}
        align="left"
        variant="h6"
        component="h3"
    >
        {comment}
    </Typography>
);

export default comment;
