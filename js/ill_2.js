$(document).ready(function(){
	
	d3.tsv("./data.tsv",function(data){
		dataset=data.map(function(d) { 
			return [ d.letter , +d.frequency ]; });
		console.log(dataset);
	});

	d3.tsv("./data2.tsv",function(data){
		dataset=data.map(function(d) { 
			return [ +d.number , +d.frequency ]; });
		console.log(dataset);
	});

	d3.select("body").append("svg").attr("width", 200).attr("height", 200).append("circle").attr("cx", 50).attr("cy", 50).attr("r", 40).style("fill", "purple");

	/*
	
	var arc=d3.svg.arc()
		.innerRadius(50).outerRadius(200)
		.startAngle(0).endAngle(Math.PI*0.26);
*/

});