import chartcommon from './ChartCommon'

export function getAssignmentsChart(assignments) {
  var chart = {
    "caption": "Field Person Able to Address Non-Compliance",
  }
  var data = [
    {"label": "Yes","value": 50},
    {"label": "No","value": 50}
  ]
  var chartanddata = {
    chart: {...chartcommon, ...chart },
    data: data
  }
  return chartanddata
}