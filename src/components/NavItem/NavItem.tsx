'use client';

import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {NavItem} from '../../../interfaces/interfaces';

const NavItem = ({url, children}: NavItem) => {
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