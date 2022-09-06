import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
	const { closeSubmenu } = useGlobalContext();

	return (
		<section className="hero" onMouseOver={closeSubmenu}>
			<div className="hero-center">
				<article className="hero-info">
					<h1>Payment Infrastructure for the internet</h1>
					<p>
						millions of companies of all sizes--from startups to Fortune
						500s--use Stripe's software and API's to accept payment, send
						payout, and manege their businesses online
					</p>
					<button className="btn">Start now</button>
				</article>
				<article className="hero-images">
					<img src={phoneImg} alt="phone" />
				</article>
			</div>
		</section>
	);
};

export default Hero;
