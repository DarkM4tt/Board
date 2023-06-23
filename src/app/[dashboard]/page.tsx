import Content from '#components/layout/Content';
import Header from '#components/layout/Header';
import Navbar from '#components/layout/Navbar';

import styles from './page.module.scss';

export default function Home () {

	return (
		<main className={styles.dashboard}>
			<Navbar appName={process.env.npm_package_name} />
			<div className={styles.content}>
				<Header />
				<Content />
			</div>
		</main>
	);
}
