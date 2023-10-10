import React from "react";
import {Outlet} from 'react-router-dom';
import NaVbar from "../components/Navbar";

export default function Root(){
	return (
		<div>
			<NaVbar />
			<Outlet />
		</div>
	);
}