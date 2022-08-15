import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { styled } from '@mui/material/styles';
import { Paper, List, ListItem, TextField, Button } from '@mui/material';

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
      <h4>添加 Token <span style={{ fontSize: 12, color: '#999' }}>(以防达到最大请求速率)</span></h4>
      <List>
        <ListItem>1. 跳转到你的 GitHub&nbsp;<code><Link to="https://github.com/settings/tokens/new?description=github_trending&scopes=public_repo">{`Settings > Personal Access Tokens > New personal access token `}</Link></code></ListItem>
        <ListItem>2. 点击&nbsp;<code>Generate Token</code></ListItem>
        <ListItem>3. 复制生成的令牌并将其添加到下面（仅保存在本地浏览器，如更换浏览器，需要重新操作）</ListItem>
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