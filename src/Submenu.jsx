import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
	const {
		isSubmenuOpen,
		location,
		page: { page, links },
	} = useGlobalContext();
	const container = useRef(null);

	const [columns, setColumns] = useState('');

	useEffect(() => {
    
		const submenu = container.current;
		const { center, bottomSubmenu } = location;


		submenu.style.cssText = ` top : ${bottomSubmenu}px;
        left : ${center}px ;
      `;
    
    if (links.length) {
      setColumns(`col-${links.length}`);
    }
    
	}, [location, links]);

	return (
		<aside className={`submenu ${isSubmenuOpen ? 'show' : ''}`} ref={container}>
			<h4>{page}</h4>
			<div className={`submenu-center ${columns}`}>
				{links.map(({ label, icon, url }, index) => {
					return (
						<a href={url} key={index}>
							{icon}
							{label}
						</a>
					);
				})}
			</div>
		</aside>
	);
};

export default Submenu;
