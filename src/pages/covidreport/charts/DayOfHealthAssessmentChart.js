import chartcommon from './ChartCommon'

export function getDayOfHealthAssessmentChart(o) {
  var chart = {
    "caption": "Completed Health Assessment on Visit Date",
  }
  var data = [
    {"label": "Completed","value": o.completed},
    {"label": "Not Completed","value": o.notcompleted}
  ]
  var chartanddata = {
    chart: {...chartcommon, ...chart },
    data: data
  }
  return chartanddata
}