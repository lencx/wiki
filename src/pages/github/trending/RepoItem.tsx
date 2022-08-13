import React from 'react';

export default function RepoItem({ full_name, owner, html_url, description, stargazers_count, forks, open_issues }) {
  return (
    <div>
      <div>{full_name}</div>
      <div>{description}</div>
      <div>
        {stargazers_count && <span>⭐️ {stargazers_count}</span>}
        {open_issues && <span>🐛 {open_issues}</span>}
        {forks && <span>📚 {forks}</span>}
      </div>
    </div>
  );
}
