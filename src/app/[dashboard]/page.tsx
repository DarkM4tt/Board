import Navbar from '#components/layout/Navbar';

import styles from './page.module.scss';

export default function Home () {
	return (
		<main className={styles.dashboard}>
			<Navbar />
		</main>
	);
}
