import Image from 'next/image';
import './Header.css';
import {NavItem} from '~/components/NavItem/NavItem';

const Header = () => {
	return (
		<header className="header">
			<nav className="nav">
				<ul className="menu">
					<NavItem url="/">Home</NavItem>
					<NavItem url="">
						<picture className="logo">
							<Image src="/logo.svg" alt="" width='32' height={32}/>
						</picture>
					</NavItem>
					<NavItem url="/tasklist">Task List</NavItem>
				</ul>
			</nav>
		</header>
	);
};

export {Header};