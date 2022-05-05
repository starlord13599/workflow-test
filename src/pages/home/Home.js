import React from 'react';
import Greet from './components/Greet';
import styles from '../../styles/Home.module.css';
import toast from '../../utils/toast';

export default function Counter() {
	const notify = () => {
		toast.success('To happy coding, Cheers!');
	};

	return (
		<div className={styles['home-container']}>
			<div className={styles.row}>
				<span className={styles.value}>
					<Greet name="Hey, there!" />
				</span>
			</div>
			<button onClick={notify} className={styles.button}>
				Make a toast
			</button>
		</div>
	);
}
