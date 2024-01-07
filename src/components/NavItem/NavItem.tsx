'use client';

import {usePathname} from 'next/navigation';
import Link from 'next/link';

const NavItem = ({url, children}) => {
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