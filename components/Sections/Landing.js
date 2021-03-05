import Container from "../Container";
import Intersection1 from "../Intersections/Jagged1";
import StripesLeftToRight from '../Patterns/StripesLeftToRight'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = (props) => {
	return (
		<section className="landing">
			<Container>
				<div className="landing--statement">
					<div className="landing--statement__top">
						<h2 className="landing--statement--title capitalize">
							earn money & boost your brand or help a cause!
						</h2>
						<h5 className="landing--statement--subtitle capitalize">
						THINK CAMPAIGNS offer you a risk-free way to earn extra revenue and brand awareness by helping you launch a t-shirt campaign. It's easy and there's no cost to you!
						</h5>
					</div>
					<div className="landing--statement__bottom">
						{/* <h5 className="landing--catch capitalize">
							THINK CAMPAIGNS offer you a risk-free way to earn extra revenue and brand awareness by helping you launch a t-shirt campaign. It's easy and there's no cost to you!
						</h5> */}
						<div className="landing--cta__container">
							<Link href="/#form">
								<a
									className="landing--cta capitalize"
									id="getStarted"
								>
									get started <FontAwesomeIcon icon="chart-bar" />
								</a>
							</Link>
							<Link href="https://www.thinkpro.net/campaigns/previous-campaigns/">
								<a
									className="landing--cta capitalize"
									id="previousCampaigns"
								>
									previous campaigns <FontAwesomeIcon icon="arrow-right" />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</Container>
			<div className="landing--images">
				<img
					src="/boy1-portrait.png"
					alt="Portrait Of Male Wearing Shirt Confidently"
					className="landing--images__boy"
				/>
				
				<img
					src="/girl1-portrait.png"
					alt="Portrait Of Female Wearing Shirt Confidently"
					className="landing--images__girl"
				/>
			</div>
			<div className="landing--intersection">
				<Intersection1 />
			</div>
            {/* <StripesLeftToRight /> */}

		</section>
	);
};

export default Landing;
