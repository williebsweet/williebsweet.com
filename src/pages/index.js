import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import HeadShot from '/img/headshot_rounded_border.svg';

function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className={styles.hero}>
        <div className={styles.bloghome__intro}>
          <div className={styles.hero_text}>
            I'm <span className={styles.intro__name}>Will</span>.
          </div>
          <p>
            A brief one to two sentences about myself and my interests.
          </p>
        </div>
        <div className={styles.bloghome__image}>
          <HeadShot />
        </div>
      </div>
    </Layout>
  );
}

export default Home;