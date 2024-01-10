'use client';

import {JSX} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

import '../Header/Header.css';

interface Props {
	children: JSX.Element | JSX.Element[] | string;
	url: string;
}

export const NavItem = ({url, children}: Props): JSX.Element => {
	const pathname = usePathname() === url;
	return (
		<li className={`${pathname ? 'active' : ''}`}>
			<Link href={url}>
				{children}
			</Link>
		</li>
	);
};