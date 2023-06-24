import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';

import Content from '#components/layout/Content';
import Navbar from '#components/layout/Navbar';
import { authOptions } from '#utils/authHelper';

import styles from './page.module.scss';

export default async function Home () {
	const session = await getServerSession(authOptions);
	if (!session) redirect('/');

	return (
		<main className={styles.dashboard}>
			<Navbar appName={process.env.npm_package_name} />
			<Content />
		</main>
	);
}
