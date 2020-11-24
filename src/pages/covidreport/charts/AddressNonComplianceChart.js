import chartcommon from './ChartCommon'

export function getAddressNonComplianceChart(addressnoncompliancechart) {
  var chart = {
    "caption": "Field Person Able to Address Non-Compliance",
  }
  var data = [
    {"label": "Yes","value": addressnoncompliancechart.percentaddressnoncompliance},
    {"label": "No","value": addressnoncompliancechart.percentnotaddressnoncompliance}
  ]
  var chartanddata = {
    chart: {...chartcommon, ...chart },
    data: data
  }
  return chartanddata
}