import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';

import SocialButton from '#components/base/SocialButton';
import PasswordLogin from '#components/layout/PasswordLogin';
import { mainRoutes } from '#data/routes';
import { authOptions } from '#utils/authHelper';

import styles from './login.module.scss';

export default async function Login () {
	const session = await getServerSession(authOptions);
	console.log(session);
	if (session) redirect(mainRoutes[0]?.path);

	return (
		<main className={styles.login}>
			<div className={styles.brand}>{process.env.npm_package_name}.</div>
			<div className={styles.loginWrapper}>
				<div className={styles.loginForm}>
					<div className={styles.header}>
						<div className={styles.title}>Sign In</div>
						<div className={styles.subtitle}>Sign in to your account</div>
						<div className={styles.socialLogin}>
							<SocialButton service='google' />
							<SocialButton service='apple' />
						</div>
						<PasswordLogin />
						<span className={styles.noAccount}>
							Don’t have an account? <span className={styles.register}>Register here</span>
						</span>
					</div>
				</div>
			</div>
		</main>
	);
}
