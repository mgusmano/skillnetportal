import chartcommon from './ChartCommon'

export function getAddressNonComplianceChart(addressnoncompliancechart) {
  var chart = {
    "caption": "Field Person Able to Address Non-Compliance",

    "toolTipBgcolor": "#484E69",
    "toolTipPadding": "7",
    "toolTipBorderRadius": "3",
    "toolTipBorderAlpha": "30",
    "tooltipBorderThickness": "0.7",
    "toolTipColor": "#FDFDFD",



    "centerLabel": "$value",
    formatNumberScale: "0",
    "centerLabelBold": "1",
    "centerLabelFontSize": "16",
    numberPrefix: "",
    numberSuffix: "",
  }
  var data = [
    {"label": "Yes","value": addressnoncompliancechart.totaladdressnoncompliance},
    {"label": "No","value": addressnoncompliancechart.totalnotaddressnoncompliance}
  ]
  var chartanddata = {
    chart: {...chartcommon, ...chart },
    data: data
  }
  return chartanddata
}