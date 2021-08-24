import React from "react";

export default function bar() {

 var array1 = [
    { name: "Delhi", val: 64 },
    { name: "Mumbai", val: 80 },
    { name: "Hyderabad", val: 76 },
    { name: "Kolkata", val: 58 },
]

	return (
		<div>
			<div className="row custom-misc-2-con-chart">
				<div className="col-5">
					<h1>Design your</h1>
					<h3>comfort zone</h3>
                    <p>Carefully curated trinkets to make a cozy home and express your personality. </p>
                    <p>Our outlets are situated in:</p>
					<ul style={{ color: "#5a4269" }}>
						{["Mumbai", "Delhi", "Hyderabad", "Kolkata"].map((data)=><li>{data}</li>)}
					</ul>

					<button
						className="btn btn-primary"
						style={{ backgroundColor: "#5a4269", borderRadius: "30px" }}
					>
						VISIT NOW
					</button>
				</div>
				<div className="col-7">
					<div className="height">
						{/* array of objects */}

						{array1.map((data) => {
							return (
								<div className="con-chart">
									<div className="bar-chart" style={{ height: `${data.val}%` }}>
										<div>{data.val}%</div>
										<p>{data.name}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}