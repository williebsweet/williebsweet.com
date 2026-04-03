import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import { Icon } from '@iconify/react';

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
            I'm a data and AI leader based in Atlanta, GA. I build at the intersection of applied AI, data infrastructure, and business strategy.
          </p>
          <p>
            I currently work at <a href='https://www.enam.co'>Enam</a>, where I build multi-agent LLM systems and connect financial analysis to product roadmaps.
            Previously, I led data teams and consulting engagements at <a href='https://www.bigtimedata.io'>Big Time Data</a>, <a href='https://www.datafold.com'>Datafold</a>, and <a href='https://www.cypress.io'>Cypress.io</a>.
          </p>
          <Socials />
        </div>
        <div className={styles.bloghome__image}>
          <img src="/img/headshot.jpeg" alt="Will Sweet" className={styles.headshot} />
        </div>
      </div>
    </Layout>
  );
}

function Socials() {
  return (
    <div className={styles.social__links} >
      <a href='https://www.twitter.com/williebsweet' target="_blank">
          <Icon icon="ri:twitter-line" />
      </a>
      <a href='https://www.linkedin.com/in/williebsweet' target="_blank">
          <Icon icon="ri:linkedin-line" />
      </a>
      <a href='https://www.github.com/williebsweet' target="_blank">
          <Icon icon="ri:github-line" />
      </a>
    </div>
  );
}

export default Home;