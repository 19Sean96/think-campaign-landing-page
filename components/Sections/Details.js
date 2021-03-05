import Container from "../Container";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Details = (props) => {
	const steps = [
		{
			name: "design process",
			description:
				"Provide Us With Your Design, or Start with a free design provided by us.",
		},
		{
			name: "get online",
			description:
				"We build a webstore, and list your products online for $25/unit.",
		},
		{
			name: "promotion",
			description:
				"Webstore is launched, ads are created & sales are ready to come in.",
		},
		{
			name: "relax",
			description:
				"We handle all the printing, labelling and shipping to your customers.",
		},
		{
			name: "pay day!",
			description:
				"Once all sales have been counted and customers have received their products, we pay you $10 per shirt sold!",
		},
	];
	return (
		<Container>
			<main className="details">
				<h1 className="details--title capitalize">the details</h1>

				<div className="details--steps">
					{steps.map((step, i) => {
						return (
							<div
								className="details--step"
								id={`step${i + 1}`}
								key={i}
							>
								<h1 className="details--step--number">
									{i + 1}
								</h1>
								<h5 className="details--step--name uppercase">
									{step.name}
								</h5>
								<h6 className="details--step--description">
									{step.description}
								</h6>
							</div>
						);
					})}
				</div>
				{/* <div className="details--steps--cta">
					<Link href="/#form">
						<a className="details--steps--cta--link capitalize">
							start getting paid
							<FontAwesomeIcon icon="chart-bar" />
						</a>
					</Link>
				</div> */}
			</main>
		</Container>
	);
};

export default Details;
