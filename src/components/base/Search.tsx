import { ChangeEvent } from 'react';

import IcSearch from '#assets/icons/search.svg';

import styles from './search.module.scss';

export default function Search (props: ISearchProps) {
	const { value, onChange } = props;
	return (
		<div className={styles.search}>
			<input type='text' placeholder='Search...' value={value} onChange={onChange} />
			<IcSearch />
		</div>
	);
}

interface ISearchProps {
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
