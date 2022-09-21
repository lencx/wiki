import React, { useEffect } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

interface BrowserWindowProps {
  children: React.ReactNode;
  minHeight: number;
  url: string;
  html?: string;
  script?: string;
}

export default function BrowserWindow({
  children,
  minHeight,
  url = "http://localhost:3000",
  html,
  script,
}: BrowserWindowProps) {
  useEffect(() => {
    const _script = document.createElement('script');
    _script.async = true;

    document.body.appendChild(_script);
    _script.innerHTML = `(function(){${script}})()`;

    return () => {
      document.body.removeChild(_script);
    }
  }, []);
  return (
    <div className={styles.browserWindow} style={{ minHeight }}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{ background: "#f25f58" }} />
          <span className={styles.dot} style={{ background: "#fbbe3c" }} />
          <span className={styles.dot} style={{ background: "#58cb42" }} />
        </div>
        <div className={clsx(styles.browserWindowAddressBar, "text--truncate")}>
          {url}
        </div>
        <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
      </div>
      {html
        ? <div className={styles.browserWindowBody} dangerouslySetInnerHTML={{ __html: html }} />
        : <div className={styles.browserWindowBody}>{children}</div>}
    </div>
  );
}
