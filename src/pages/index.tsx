import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={`hero__subtitle ${styles.subtitle}`}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      wrapperClassName={styles.layout}
      title={`Hello from ${siteConfig.title}`}
      description="🗺️ lencx 的知识地图">
      <div className={styles.fzj}>
        <img src={require('@site/static/fzj.png').default} />
      </div>
    </Layout>
  );
}
