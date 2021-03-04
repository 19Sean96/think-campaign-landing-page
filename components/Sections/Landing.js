import Container from "../Container";
import Intersection1 from "../Intersections/Details";
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
							promote your brand with $0 down.
						</h2>
						<h3 className="landing--statement--subtitle capitalize">
							plus make some money along the way with a custom
							t-shirt campaign.
						</h3>
					</div>
					<div className="landing--statement__bottom">
						<h4 className="landing--catch capitalize">
							since there's no initial investment, there's no
							risk. what are you waiting for?
						</h4>
						<div className="landing--cta__container">
							<Link href="">
								<a
									className="landing--cta capitalize"
									id="getStarted"
								>
									get started <FontAwesomeIcon icon="chart-bar" />
								</a>
							</Link>
							<Link href="">
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
            <StripesLeftToRight />

		</section>
	);
};

export default Landing;
