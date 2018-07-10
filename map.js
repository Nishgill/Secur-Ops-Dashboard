
	function map_load(data_zone1,data_zone2){
		
		console.log(data_zone1);
		
		

		var imgHeight = 400, imgWidth = 1200,      
			width =  1200, height = 400,             
			translate0 = [-290, -180], scale0 = 1;  

		svg = d3.select("#area1").append("svg")
			.attr("width",  width + "px")
			.attr("height", height + "px");

		svg.append("image")
			.attr("width",  imgWidth + "px")
			.attr("height", imgHeight + "px")
			.attr("xlink:href", "screenshot.png");
		
		console.log("here");
		for(var i=0;i<3;i++){
			console.log("checkpoint1");
			if (data_zone1[i] == "circle"){
				console.log("checkpoint2");
					console.log(data_zone2[i]);
					var array_data = data_zone2[i].split(',');
					svg.append("circle").attr("id","auto_circle"+i).attr("cx", array_data[0]).attr("cy", array_data[1]).attr("r", array_data[2]).style("fill", "purple").on("mouseover", function(d){
						d3.select(this).attr("stroke-width",40).style("fill","grey").style("opacity",0.5).attr("r",50);
						id = d3.select(this).attr('id');
						update_text(id);
					})
					.on("mouseout", function(d){
						d3.select(this).attr("stroke-width",2).style("fill","green").style("opacity",0.25).attr("r",30);
					});;
					
					
			}
			else if (data_zone1[i] == "rect"){
				
				console.log("checkpoint3");
				console.log(data_zone2[i]);
					var array_data = data_zone2[i].split(',');
					svg.append("rect").attr("id","auto_rectangle"+i)
					.attr("width", array_data[2])
					.attr("height", array_data[3]).attr("x", array_data[0]).attr("y", array_data[1]).style("fill", "purple").on("mouseover", function(d){
						d3.select(this).attr("stroke-width",40).style("fill","grey").style("opacity",0.5).attr("r",50);
						id = d3.select(this).attr('id');
						update_text(id);
					})
					.on("mouseout", function(d){
						d3.select(this).attr("stroke-width",2).style("fill","green").style("opacity",0.25).attr("r",30);
					});;
					
			}
			
		}
		
		
		//pin3 circle
		svg.append("circle").attr("id","pin3").attr("cx", 500).attr("cy", 175).attr("r", 30).style("fill", "white").style("stroke","black")
		.style("stroke-width",2).style("stroke-dasharray", ("4, 2")).style("opacity",0.25)
		.on("mouseover", function(d){
			d3.select(this).attr("stroke-width",40).style("fill","grey").style("opacity",0.5).attr("r",50);
			id = d3.select(this).attr('id');
						update_text(id);
		})
		      .on("mouseout", function(d){
		    d3.select(this).attr("stroke-width",2).style("fill","none").style("opacity",0.25).attr("r",30).duration(300);});
		
		//pin4 circle
                    svg.append("circle").attr("id","pin4").attr("cx", 500).attr("cy", 275).attr("r", 30).style("fill", "none").style("stroke","black")
		              .style("stroke-width",2).style("stroke-dasharray", ("4, 2")).on("mouseover", function(d){
			d3.select(this).attr("stroke-width",40).style("fill","grey").style("opacity",0.5).attr("r",50);
			id = d3.select(this).attr('id');
						update_text(id);
		})
		      .on("mouseout", function(d){
		    d3.select(this).attr("stroke-width",2).style("fill","none").style("opacity",0.25).attr("r",30).duration(300);});
		
		//pin5 rectangle
		                svg.append("rect").attr("id","pin5").attr("x", 600)
                           .attr("y", 150).attr("width", 100).attr("height", 50).style("fill", "none").style("stroke","black")
		                   .style("stroke-width",2).style("stroke-dasharray", ("4, 2")).on("mouseover", function(d){
			d3.select(this).attr("stroke-width",40).style("fill","grey").style("opacity",0.5).attr("r",50);
			id = d3.select(this).attr('id');
						update_text(id);
		})
		          .on("mouseout", function(d){
			    d3.select(this).attr("stroke-width",2).style("fill","none").style("opacity",0.25).attr("r",30);});
		
		//pin6 rectangle
		 svg.append("rect").attr("id","pin6").attr("x", 600)
                           .attr("y", 250).attr("width", 100).attr("height", 50).style("fill", "none").style("stroke","black")
		                   .style("stroke-width",2).style("stroke-dasharray", ("4, 2")).on("mouseover", function(d){
			d3.select(this).attr("stroke-width",40).style("fill","grey").style("opacity",0.5).attr("r",50);
			id = d3.select(this).attr('id');
						update_text(id);
		})
		        .on("mouseout", function(d){
		      d3.select(this).attr("stroke-width",2).style("fill","none").style("opacity",0.25).attr("r",30).duration(300);});
		
		X = [500,533,500,468,500,500,533,500,468,500,600,620,640,660,680,700,700,700,700,680,660,640,620
		    ,600,600,600,600,600,620,640,660,680,700,700,700,700,680,660,640,620,600,600,600,600];
		Y = [147,175,200,175,147,245,275,300,275,247,150,150,150,150,150,150,165,180,195,195,195,195,195
		    ,195,180,165,150,250,250,250,250,250,250,265,280,295,295,295,295,295,295,280,265,250];

         svg.append("text").attr("id","text2").attr("x",900).attr("y",100).attr("font-size",15).style("fill","black").text("testing");
		 
		 var rectangle= svg.append("rect")				   
                    .attr("width", 250)
                    .attr("height", 200)
					.attr("x",850)
					.attr("y", 55)
					.attr("fill", "#b28787")
					.attr("rx",15)
					.attr("ry",15)			  
	                .on("mouseover", function(d){
						d3.select(this).attr("stroke-width",40).style("fill","green").style("opacity",0.5).attr("r",50);
						id = d3.select(this).attr('id');
						update_text(id);
						})
					.on("mouseout", function(d){
						
					 d3.select(this).attr("stroke-width",2).style("fill","grey").style("opacity",0.25).attr("r",30);});
	
		k=0 ;
		   var inter = setInterval(function(){
			//console.log("upating "+k);
			
			var svg=d3.select("#area1").transition();
			
			svg.select("circle#pin1").attr("cx", X[k]).attr("cy", Y[k]).attr("r", 5).style("fill", "red").duration(1000);
			k++;
		   },2000);
	}
              function zoom() {
			   svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
			    //console.log("translate: " + d3.event.translate + ", scale: " + d3.event.s
				}
			
	        function update_text(name){
		        //console.log("inside function "+id);
		        var svg=d3.select("#area1").transition();
		        svg.select("text#text2").text("updating "+id).duration(1000);
		    }