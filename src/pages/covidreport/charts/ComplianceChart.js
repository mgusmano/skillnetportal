import chartcommon from './ChartCommon'

export function getComplianceChart(compliance) {
  var chart = {
    "caption": "Policyholder Safefy and Health Compliance",
  }
  var data = [
    {"label": "Compliant","value": compliance.totalcompliant},
    {"label": "Not Compliant","value": compliance.totalnoncompliant}
  ]
  var chartanddata = {
    chart: {...chartcommon, ...chart },
    data: data
  }
  return chartanddata
}