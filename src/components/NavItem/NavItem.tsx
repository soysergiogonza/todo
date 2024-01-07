'use client';

import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {NavItem} from '../../../interfaces/interfaces';
import {JSX} from 'react';

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