import React from 'react';
import Giscus from '@giscus/react';

export default function WikiComments() {
  return (
    <div style={{ marginTop: 30 }}>
      <Giscus
        id="comments"
        repo="lencx/wiki"
        repoId="R_kgDOHyLBpg"
        category="Comments"
        categoryId="DIC_kwDOHyLBps4CRoF9"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark_dimmed"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
