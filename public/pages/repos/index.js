import RepoList from '../../components/RepoList/index.js';
import styles from './style.module.css';

export default function ReposPage({ query }) {
  return (
    <div class={styles.repos}>
      <header>
        <a href="/">Go Home</a>
      </header>
      <h1>Repos</h1>
      <RepoList search={query && query.search || 'preact'} />
    </div>
  );
}
