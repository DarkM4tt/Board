import SocialButton from '#components/base/SocialButton';
import PasswordLogin from '#components/layout/PasswordLogin';

import styles from './login.module.scss';

export default function Login () {

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
