import React from 'react';

import Layout from '@site/src/layout';
import './index.scss';

export default function Sponsor() {
  return (
    <Layout title="Sponsor" wrapperClassName="sponsor">
      <h2>Sponsor</h2>
      <p>🙏 创作不易，如果文章对您有所帮助，可以请我喝杯咖啡，感恩！</p>
      <div>
        <img src={require('./img/sponsor.png').default} alt="赞赏码" />
      </div>
    </Layout>
  );
}