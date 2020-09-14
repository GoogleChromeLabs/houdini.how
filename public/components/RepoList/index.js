import { useState, useEffect } from 'preact/hooks';
import styles from './style.module.css';

const SEARCH = 'https://api.github.com/search/repositories';

const CACHE = new Map();
function get(url) {
  if (!CACHE.has(url)) CACHE.set(url, fetch(url).then(r => r.json()));
  return CACHE.get(url);
}

export default function RepoList({ search }) {
	const [items, setItems] = useState([]);

  // re-runs any time "search" changes, or on mount
	useEffect(() => {
		get(`${SEARCH}?q=${encodeURIComponent(search)}`).then(data => {
      console.log(data);
      setItems((data && data.items) || []);
    });
	}, [search]);

	return (
		<div class={styles.repoList}>
			<header>Searched for: "{search}"</header>
			<div class={styles.list}>
				{items.map(result => (
					<Result {...result} />
				))}
			</div>
		</div>
	);
}

function Result(result) {
  return (
    <div class={styles.repo}>
      <div>
        <a href={result.html_url} target="_blank">
          {result.full_name}
        </a>
        {" - "}
        <strong>{result.stargazers_count}</strong>
      </div>
      <p>{result.description}</p>
    </div>
  );
}
