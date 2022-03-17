import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '夯实基础',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        万丈高楼平地起，坚实的基础才能建造雄伟的大厦。工作一段时间后，
        对基础的理解和需求，也不再相同。
      </>
    ),
  },
  {
    title: '重点突破',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        软件开发已经成为一个庞大的品类，选择有兴趣有潜在价值的点，专注持续投入才能有一定的成果。我希望经过一段时间学习，
        能成为一个优秀的分布式数据库工程师。
      </>
    ),
  },
  {
    title: '终身学习',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        人生是有限的，但好用的知识太多(比如人工智能)，不满足现状，持续学习才能让自己持续进化。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
