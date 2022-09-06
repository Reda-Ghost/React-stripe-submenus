import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import sublinks from './data';

const Navbar = () => {
	const { openSidebar, closeSubmenu, openSubmenu } = useGlobalContext();

	const showSubmenu = (e) => {
		const page = e.target.textContent;
		const { left, right, bottom } = e.target.getBoundingClientRect(); // JS Method help's getting Element Coordination

		const center = (left + right) / 2;
		const bottomSubmenu = bottom - 3;

		openSubmenu(page, { center, bottomSubmenu });
	};

	const handelSubmenu = (e) => {
		if (!e.target.classList.contains('link-btn')) {
			closeSubmenu()
		}
	}

	return (
		<nav className="nav" onMouseOver={handelSubmenu}>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="stripe-logo" />
					<button className="btn toggle-btn" onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					{sublinks.map(({ id, page }) => {
						return (
							<li key={id}>
								<button className="link-btn" onMouseEnter={showSubmenu}>
									{page}
								</button>
							</li>
						);
					})}
				</ul>
				<button className="btn signin-btn">Sign in</button>
			</div>
		</nav>
	);
};

export default Navbar;
