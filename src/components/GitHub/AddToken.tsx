import React, { useState } from 'react';
import { Typography, Paper, List, ListItem, TextField, Button } from '@mui/material';
import Link from '@docusaurus/Link';
import { useTheme, styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';

const StyledPopper = styled(Paper)({
  padding: 20,
});

export default function AddToken() {
  const [token, setToken] = useState('');

  const handleSave = () => {
    localStorage.setItem('WIKI_GITHUB_TOKEN', token);
    window.location.reload();
  }
  return (
    <StyledPopper className="add-token">
      <h4>添加 Token 以防达到最大请求速率</h4>
      <List>
        <ListItem>1. 跳转到你的 GitHub&nbsp;<code><Link to="https://github.com/settings/tokens/new?description=github_trending&scopes=public_repo">{`Settings > Personal Access Tokens > New personal access token `}</Link></code></ListItem>
        <ListItem>2. 点击&nbsp;<code>Generate Token</code></ListItem>
        <ListItem>3. 复制生成的令牌并将其添加到下面（仅保存在本地浏览器，如果更换浏览器，需要重复此操作）</ListItem>
        <ListItem>
          <TextField
            id="add-token"
            label="GitHub Token"
            placeholder="请输入 Token"
            variant="standard"
            onChange={(e) => setToken(e.target.value)}
          />
        </ListItem>
        <ListItem>
          <Button style={{ width: 100 }} variant="contained" onClick={handleSave}>保存</Button>
        </ListItem>
      </List>
    </StyledPopper>
  )
}