import React, { Component } from 'react';
import { Skeleton, Stack  } from '@mui/material'
class SkeletonPage extends Component {
    render() {
        return (
            <>

                <div style={{ display: 'flex'}} className='skeleton'>
                    <Stack spacing={1} width={700}  >
                        <Skeleton  variant="rectangular" width={600} height={300} />
                        <Skeleton width="97%"  />
                        <Skeleton width="97%"  />
                    </Stack>
                    <Stack spacing={1} width={700} >
                        <Skeleton variant="rectangular" width={600} height={300} />
                        <Skeleton width="97%"  />
                        <Skeleton width="97%"  />
                    </Stack>
               
                </div>
                <div style={{ display: 'flex'}} className='skeleton'>
                    <Stack spacing={1} width={700}  >
                        <Skeleton  variant="rectangular" width={600} height={300} />
                        <Skeleton width="97%"  />
                        <Skeleton width="97%"  />
                    </Stack>
                    <Stack spacing={1} width={700} >
                        <Skeleton variant="rectangular" width={600} height={300} />
                        <Skeleton width="97%"  />
                        <Skeleton width="97%"  />
                    </Stack>
               
                </div>
            </>
        );
    }
}

export default SkeletonPage;
