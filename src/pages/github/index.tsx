import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from 'react-router-dom';
import { Unstable_Grid2 as Grid, Card, CardContent, CardActionArea, CardMedia } from '@mui/material'

export default function GitHub() {
  const history = useHistory();
  return (
    <Layout title="GitHub">
      <Grid container spacing={2} sx={{ margin: 2 }}>
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea onClick={() => history.push('/github/trending')}>
              <CardMedia
                component="img"
                height="160"
                image={require('@site/static/github/trending.png').default}
              />
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