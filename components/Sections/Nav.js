import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GlobalNav = (props) => {
	return <nav className="nav nav__global"></nav>;
};

const LocalNav = (props) => {
	return (
		<nav className="nav nav__local">
			<Link href="/#form">
				<a className="nav--item capitalize filled-bg">
					start your campaign <FontAwesomeIcon icon="chart-bar" />
				</a>
			</Link>
			<Link href="/faqs">
				<a className="nav--item unfilled-bg">FAQs</a>
			</Link>
		</nav>
	);
};

export { GlobalNav, LocalNav };
