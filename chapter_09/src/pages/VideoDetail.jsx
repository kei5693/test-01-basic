import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail(){
	//const params = useParams();
	//console.log(params);

	// 구조 분해 할당
	const { videosId } = useParams();
	console.log(videosId);
	return <div>VideoDetail {videosId}</div>;
}