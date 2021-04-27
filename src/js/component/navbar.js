import React from "react";

export function Navbar() {
	return (
		<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-dark border-bottom shadow-sm">
			<h5 className="my-0 mr-md-auto font-weight-normal text-white">
				Start Bootstrap{" "}
			</h5>
			<nav className="my-2 my-md-0 mr-md-3">
				<a className="p-2 text-white" href="#">
					Home
				</a>
				<a className="p-2 text-white" href="#">
					About
				</a>
				<a className="p-2 text-white" href="#">
					Services
				</a>
				<a className="p-2 text-white" href="#">
					Contact
				</a>
			</nav>
		</div>
	);
}
