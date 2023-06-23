import styles from './navbar.module.scss';

export default function Navbar () {
	return (
		<div className={styles.navbar}>
			<div className={styles.brand}>{process.env.npm_package_name}.</div>
		</div>
	);
}
