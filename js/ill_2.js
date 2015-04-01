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
});