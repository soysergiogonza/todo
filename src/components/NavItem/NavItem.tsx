'use client';

import {JSX} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

import '../Header/Header.css';

import {NavItem} from '../../../interfaces/interfaces';

const NavItem = ({url, children}: NavItem): JSX.Element => {
	const pathname = usePathname() === url;
	return (
		<li className={`nav-item ${pathname ? 'active' : ''}`}>
			<Link href={url}>
				{children}
			</Link>
		</li>
	);
};

export {NavItem};