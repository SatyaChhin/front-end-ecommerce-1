import React, { Component } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
class LinearIndeterminate extends Component {
    render() {
        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        );
    }
}
export default LinearIndeterminate;
