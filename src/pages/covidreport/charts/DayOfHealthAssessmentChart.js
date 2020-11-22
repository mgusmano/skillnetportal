import chartcommon from './ChartCommon'

export function getDayOfHealthAssessmentChart(compliant,notcompliant) {
  var chart = {
    "caption": "Completed Health Assessment on Visit Date",
  }
  var data = [
    {"label": "Completed","value": compliant},
    {"label": "Not Completed","value": notcompliant}
  ]
  var chartanddata = {
    chart: {...chartcommon, ...chart },
    data: data
  }
  return chartanddata
}