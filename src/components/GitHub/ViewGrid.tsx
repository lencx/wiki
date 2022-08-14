import React from 'react';
import { Card, CardActionArea, CardHeader, CardContent, CardActions, Avatar, Typography } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';

import { LangIcon } from './Languages';

const StyledCard = styled(Card)(() => ({
  height: '100%'
}));

const OwnerType = ({ type }) => ({
  User: <PersonIcon titleAccess="User" fontSize='small' />,
  Organization: <GroupIcon titleAccess="Organization" fontSize='small' />,
}[type]);

const RepoItem = ({ full_name, language, owner, html_url, description, stargazers_count, forks, open_issues }) => {
  return (
    <StyledCard>
      <CardActionArea onClick={() => window.open(html_url, '__blank')}>
        <CardHeader
          className="repo-head"
          avatar={(
            <Avatar
              onClick={(e) => {
                e.stopPropagation();
                window.open(owner.html_url, '__blank');
              }}
              src={owner.avatar_url}
              variant="circular"
            />
          )}
          title={<Typography fontSize={12} variant="inherit" component="b">{full_name}</Typography>}
          subheader={<OwnerType type={owner.type} />}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          {language && <LangIcon lang={language} />}
          {stargazers_count > 0 && <span>⭐️ {stargazers_count}</span>}
          {open_issues > 0 && <span>🐛 {open_issues}</span>}
          {forks > 0 && <span>📚 {forks}</span>}
        </CardActions>
      </CardActionArea>
    </StyledCard>
  );
}

export default function ViewGrid({ data }) {
  return (
    <Grid className="repo-grid" container spacing={2} sx={{ margin: 2 }}>
      {data.map((repoProps) => (
        <Grid xs={12} sm={6} md={4} key={repoProps.id}>
          <RepoItem {...repoProps} />
        </Grid>
      ))}
    </Grid>
  )
}