import React from 'react';

import Layout from '@site/src/layout';
import './index.scss';

export default function Sponsor() {
  return (
    <Layout title="Sponsor" wrapperClassName="sponsor">
      <h2>Sponsor</h2>
      <p>🙏 创作不易，如果文章对您有所帮助，可以请我喝杯咖啡，感恩！</p>
      <div>
        <img src={require('./img/wechat.png').default} alt="微信支付" />
        <img src={require('./img/alipay.png').default} alt="支付宝支付" />
      </div>
    </Layout>
  );
}