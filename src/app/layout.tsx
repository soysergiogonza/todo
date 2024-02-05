import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';
import './globals.css';
import {ReactNode} from 'react';
import {Header} from '~/components/Header/Header';

const roboto = Roboto({
	weight: ['400', '700'],
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'Todo List App',
	description: 'Todo List App',
	icons: {
		icon: '/logo.svg',
	},
};

export default function RootLayout({
	                                   children,
                                   }: {
	children: ReactNode
}) {
	return (
		<html lang="en">
		<body className={roboto.className} suppressHydrationWarning={true}
		      style={{padding: '0 24px', maxWidth: '1366px', margin: '0 auto'}}>
		<Header/>
		{children}</body>
		</html>
	);
}
