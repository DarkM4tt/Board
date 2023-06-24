import { FC, SVGProps } from 'react';

import { noop } from 'lodash';

import IcAvatar from '#assets/icons/avatar.svg';
import IcDashboard from '#assets/icons/dashboard.svg';
import IcSchedules from '#assets/icons/schedule.svg';
import IcSettings from '#assets/icons/setting.svg';
import IcTransactions from '#assets/icons/transaction.svg';
import Dashboard from '#components/page/Dashboard';
import Logout from '#components/page/Logout';

export const mainRoutes: IRoute[] = [
	{ name: 'Dashboard', path: '/dashboard', Icon: IcDashboard, View: Dashboard },
	{ name: 'Transactions', path: '/transactions', Icon: IcTransactions, View: noop as FC },
	{ name: 'Schedules', path: '/schedules', Icon: IcSchedules, View: noop as FC },
	{ name: 'Users', path: '/users', Icon: IcAvatar, View: noop as FC },
	{ name: 'Settings', path: '/settings', Icon: IcSettings, View: noop as FC },
];
export const externalLinks: IRoute[] = [
	{ name: 'Help', path: '/help', View: noop as FC },
	{ name: 'Contact Us', path: '/contact-us', View: noop as FC },
	{ name: 'Logout', path: '/logout', View: Logout },
];

export interface IRoute {
	name: string;
	path: string;
	Icon?: FC<SVGProps<SVGSVGElement>>;
	View: FC;
}
