import Navbar from '#components/layout/Navbar';

import styles from './page.module.scss';

export default function Home () {
	return (
		<main className={styles.dashboard}>
			<Navbar appName={process.env.npm_package_name} />
		</main>
	);
}
