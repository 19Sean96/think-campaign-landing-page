import { GlobalNav, LocalNav } from "./Nav";
import ThinkLogo from "../Bits/ThinkLogo";
import Container from "../Container";
import Link from 'next/link';
const Header = (props) => {
	return (
		<Container>
			<header className="header">
				<div className="header--left">
					<div className="logo__container">
						<Link href="https://www.thinkpro.net/">
							<a><ThinkLogo color="3e3e3e"/></a>
						</Link>
						<h6 className="logo--local">Campaigns</h6>
					</div>
				</div>
				<div className="header--right">
					<LocalNav />
				</div>
			</header>
		</Container>
	);
};

export default Header;
