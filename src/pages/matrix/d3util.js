import * as d3 from 'd3';
import './WidgetType.css';

export const getSVG = (container, width, height, layout) => {
  var margin = {top: 0, left: 0, right: 50, bottom: 500};

  var svg;
  if (layout === 'fixed') {
    svg = d3.select(container).append("svg")
    .attr("height", width)
    .attr("width", height)
    .attr("fill", `lightgray`)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  }
  else {
    svg = d3.select(container).append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .classed("svg-content", true)
    .attr("fill", `lightgray`)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  }
  return svg;
}