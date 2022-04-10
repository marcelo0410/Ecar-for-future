import React,{useEffect, useRef, useState} from 'react'
import * as d3 from "d3"

export default function EmissionMap() {
  const svgRef = useRef(null);
  const [dataG, setdataG] = useState()
  const w = 780
  const h = 700
  useEffect(() => {
    fetch(`/aust.json`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
     .then(res=> res.json())
     .then(data=> plotMap(data))

    const plotMap = (dataMap)=>{
      const projection = d3.geoMercator().center([ 132, -28 ])
      .translate([ w/2, h/2 ])
      .scale(800);
      const path = d3.geoPath().projection(projection)
      const color = d3.scaleOrdinal(['#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9'])
      const svgEl = d3.select(svgRef.current).append("g")

      svgEl.selectAll("path")
      .data(dataMap.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("stroke", "dimgray")
      .attr("fill", function(d, i) {return color(i)});

      svgEl.selectAll("text")
      .data(dataMap.features)
      .enter()
      .append("text")
      .attr("fill", "darkslategray")
      .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .text(function(d) {
      return d.properties.STATE_NAME;
      });

      // svgEl.append("text")
      // .attr("x", 446)
      // .attr("y", 340)
      // .attr("font-size", 90)
      // .attr("font-weight", "bold")
      // .attr("font-family", "Roboto")
      // .attr("text-anchor", "middle")
      // .attr("opacity", 0.10)
      // .text("AUSTRALIA");
      drawPieChart(svgEl, projection)
   }
    
       const drawPieChart = (svgEl, projection) =>{
         const svgElPie = d3.select(svgRef.current).append("g")
         const radius = 30
         let pie = d3.pie()
          .sort(null)
          .value(function(d) { return d; });
         let arc = d3.arc()
          .innerRadius(0)
          .outerRadius(radius);
         var color = d3.schemeCategory10;

         d3.csv('/aust_pie.csv', function(pieData){
           console.log(pieData)
           const points = svgElPie.selectAll("g")
           .data(pieData)
           .enter()
           .append("g")
           .attr("transform",function(d) { return "translate("+projection([d.lon,d.lat])+")" })
           .attr("class","pies")

           let pies = points.selectAll(".pies")
           .data(function(d) { return pie(d.datag.split(['-'])); })
           .enter()
           .append('g')
           .attr('class','arc');
 
           pies.append("path")
             .attr('d',arc)
               .attr("fill",function(d,i){
                   return color[i+1];     
               });
         })


        
        //  svgElPie.append("text")
        //  .attr("y", -radius - 5)
        //  .text(function(d) { return d.label })
        //  .style('text-anchor','middle');


       }   





    return () => {

    }
  }, [])
  


  return (
    <div style={{paddingTop:"50px"}}>
      <svg ref={svgRef} width={w} height={h} ></svg>
    </div>
  )
}
