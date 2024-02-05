import {JSX} from 'react';

export interface NavItem {
	children: JSX.Element | JSX.Element[] | string;
	url: string;
}

export interface CoverSource {
	source: string;
	style?: any;
	className?: any;
	width?: number;
	height?: number;
}

export interface IconSource {
	source: string;
	style?: any;
	className?: any;
	width?: number;
	height?: number;
}
