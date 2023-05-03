import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import { Icon } from '@iconify/react';

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
            I'm a data scientist and product lead based out of Atlanta, GA. 
          </p>
          <p>
            I currently work at <a href='bigtimedata.io'>Big Time Data</a>, helping teams architect and build data infrastructure and tooling. 
            Before that, I was Head of Data and Product Experience at <a href='datafold.com'>Datafold</a> and Director of Data at <a href='cypress.io'>Cypress.io</a>.
          </p>
          <Socials />
        </div>
        <div className={styles.bloghome__image}>
          <HeadShot />
        </div>
      </div>
    </Layout>
  );
}

function Socials() {
  return (
    <div className={styles.social__links} >
      <a href='twitter.com/williebsweet' target="_blank">
          <Icon icon="ri:twitter-line" />
      </a>
      <a href='linkedin.com/in/williebsweet' target="_blank">
          <Icon icon="ri:linkedin-line" />
      </a>
      <a href='github.com/williebsweet' target="_blank">
          <Icon icon="ri:github-line" />
      </a>
    </div>
  );
}

export default Home;