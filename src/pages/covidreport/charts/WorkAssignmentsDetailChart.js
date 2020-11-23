import chartcommon from './ChartCommon'

export function getWorkAssignmentsDetailChart(workassignments) {


  // var firstArray = []
  // for (const [key, value] of Object.entries(daysArray)) {
  //   var a = {label: key, value: value}
  //   firstArray.push(a)
  // }
  // //console.log(firstArray)
  // const sortedArray = firstArray.sort((a, b) => new Date(a.label) - new Date(b.label))
  // console.log(sortedArray)

  // var categoryArray = []
  // var dataArray = []
  // for (const [key, value] of Object.entries(daysArray)) {


  //   var c = {label: key}
  //   categoryArray.push(c)
  //   var v = {value: value}
  //   dataArray.push(v)
  // }
  // //console.log(categoryArray)

  var chart = {
    caption: "Work Assignment Details",
  }
  var categories = [
    {category: workassignments}
  ]
  var dataset = [
    {seriesname: "Authorized",data: workassignments},
  ]
  var chartanddata = {
    chart: {...chartcommon, ...chart },
    categories: categories,
    dataset: dataset
  }
  return chartanddata
}