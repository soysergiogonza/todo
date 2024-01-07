import './Header.css';
import {NavItem} from '~/components/NavItem/NavItem';

const Header = () => {
	return (
		<header className="header">
			<nav className="nav">
				<ul className="menu">
					<NavItem url="/">Home</NavItem>
					<NavItem url="/">
						<picture className="logo">
							<img src="/logo.svg" alt=""/>
						</picture>
					</NavItem>
					<NavItem url="/tasklist">Task List</NavItem>
				</ul>
			</nav>
		</header>
	);
};

export {Header};