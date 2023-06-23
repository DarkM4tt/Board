import { FC, SVGProps } from 'react';

import { noop } from 'lodash';

import IcDashboard from '#assets/icons/dashboard.svg';
import IcSchedules from '#assets/icons/schedule.svg';
import IcSettings from '#assets/icons/setting.svg';
import IcTransactions from '#assets/icons/transaction.svg';
import IcUsers from '#assets/icons/user.svg';
import Dashboard from '#components/page/Dashboard';

export const routes: IRoute[] = [
	{ name: 'Dashboard', path: '/dashboard', Icon: IcDashboard, View: Dashboard },
	{ name: 'Transactions', path: '/transactions', Icon: IcTransactions, View: noop as FC },
	{ name: 'Schedules', path: '/schedules', Icon: IcSchedules, View: noop as FC },
	{ name: 'Users', path: '/users', Icon: IcUsers, View: noop as FC },
	{ name: 'Settings', path: '/settings', Icon: IcSettings, View: noop as FC },
];
export const externalLinks: IRoute[] = [
	{ name: 'Help', path: '/help', View: noop as FC },
	{ name: 'Contact Us', path: '/contact-us', View: noop as FC },
];

interface IRoute {
	name: string;
	path: string;
	Icon?: FC<SVGProps<SVGSVGElement>>;
	View: FC;
}
