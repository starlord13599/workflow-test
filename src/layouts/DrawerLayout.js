//add any layout related component here
import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../styles/DrawerLayout.module.css';

function DrawerLayout() {
	return (
		<div className={styles.layout}>
			<Outlet />
		</div>
	);
}

export default DrawerLayout;
