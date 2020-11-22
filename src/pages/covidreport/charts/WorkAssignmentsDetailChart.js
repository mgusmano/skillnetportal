import chartcommon from './ChartCommon'

export function getWorkAssignmentsDetailChart(daysArray) {




  
  var categoryArray = []
  var dataArray = []
  for (const [key, value] of Object.entries(daysArray)) {
    var c = {label: key}
    categoryArray.push(c)
    var v = {value: value}
    dataArray.push(v)
  }
  var chart = {
    caption: "Work Assignment Details",
  }
  var categories = [
    {category: categoryArray}
  ]
  var dataset = [
    {seriesname: "Authorized",data: dataArray},
  ]
  var chartanddata = {
    chart: {...chartcommon, ...chart },
    categories: categories,
    dataset: dataset
  }
  return chartanddata
}