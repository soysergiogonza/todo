import {JSX} from 'react';

export interface NavItem {
	children: JSX.Element | JSX.Element[] | string;
	url: string;
}