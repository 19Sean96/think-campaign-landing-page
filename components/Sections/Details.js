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
								{/* <h1 className="details--step--number">
									{i + 1}
								</h1>
								<h5 className="details--step--name uppercase">
									{step.name}
								</h5>
								<h6 className="details--step--description">
									{step.description}
								</h6> */}
								<div
									className={`details--step--img__wrapper details--step--img__${
										i % 2 === 0 ? "left" : "right"
									}`}
								>
									<img
										src={`step_${i + 1}.png`}
										alt={step.description}
										className="details--step--img"
									/>
									{i === 2 && (
										<img
											src={`step_${i + 1}b.png`}
											alt="Rocket"
											id="rocket"
										/>
									)}
									<svg
										height="0"
										xmlns="http://www.w3.org/2000/svg"
										className="shadow"
									>
										<filter id="drop-shadow">
											<feGaussianBlur
												in="SourceAlpha"
												stdDeviation="17"
											/>
											<feOffset
												dx="0"
												dy="7"
												result="offsetblur"
											/>
											<feFlood floodColor="rgba(0,0,0,0.2)" />
											<feComposite
												in2="offsetblur"
												operator="in"
											/>
											<feMerge>
												<feMergeNode />
												<feMergeNode in="SourceGraphic" />
											</feMerge>
										</filter>
									</svg>
								</div>
							</div>
						);
					})}

				<div className="details--steps--cta">
					<Link href="https://www.thinkpro.net/campaigns/campaign-frequently-asked-questions/">
						<a className="details--steps--cta--link capitalize">
							learn more
						</a>
					</Link>
				</div>
				</div>

			</main>
		</Container>
	);
};

export default Details;
