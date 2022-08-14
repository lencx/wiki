import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from 'react-router-dom';
import { Unstable_Grid2 as Grid, Card, CardContent, CardActionArea } from '@mui/material'

export default function GitHub() {
  const history = useHistory();
  return (
    <Layout title="GitHub">
      <Grid container spacing={2} sx={{ margin: 2 }}>
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea onClick={() => history.push('/github/trending')}>
              <CardContent>
                GitHub Trending
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}