import IcDashboard from '#assets/icons/dashboard.svg';
import IcSchedules from '#assets/icons/schedule.svg';
import IcSettings from '#assets/icons/setting.svg';
import IcTransactions from '#assets/icons/transaction.svg';
import IcUsers from '#assets/icons/user.svg';
import Dashboard from '#components/page/Dashboard';

export const routes = [
	{ name: 'Dashboard', path: '/dashboard', Icon: IcDashboard, Component: Dashboard },
	{ name: 'Transactions', path: '/transactions', Icon: IcTransactions, Component: null },
	{ name: 'Schedules', path: '/schedules', Icon: IcSchedules },
	{ name: 'Users', path: '/users', Icon: IcUsers, Component: null },
	{ name: 'Settings', path: '/settings', Icon: IcSettings, Component: null },
];
export const externalLinks = [
	{ name: 'Help', path: '/help', Component: null },
	{ name: 'Contact Us', path: '/contact-us', Component: null },
];
