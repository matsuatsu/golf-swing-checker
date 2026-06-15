import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Golf Swing Checker"
      description="基礎から段階的にゴルフスイングを作る教材アプリ">
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.inner}>
            <p className={styles.kicker}>Golf Swing Checker</p>
            <h1>基礎から段階的にスイングを作る</h1>
            <p className={styles.lead}>
              練習ステップ、チェックポイント、合格基準を確認しながら、ショートアイアンでスイングの土台を作る教材アプリです。
            </p>
            <Link className={styles.button} to="/lessons/intro">
              ドキュメントを見る
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
