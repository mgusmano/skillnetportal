import chartcommon from './ChartCommon'

export function getVisitsChart(scheduled, notscheduled) {
  var chart = {
      "caption": "Policyholder Visits Scheduled",
      "xdefaultCenterLabel": "Total <br> $6.2",
      "centerLabel": "$value",
      "centerLabelBold": "1",
      "centerLabelFontSize": "20",
      "canvasLeftMargin": "0",
      "canvasRightMargin": "40",
      "canvasBottomMargin": "20",
      "canvasTopMargin": "20",
    }

  var data = [
      {"label": "Scheduled","value": scheduled},
      {"label": "Not Scheduled","value": notscheduled}
    ]

  var chartanddata = {
    chart: {...chartcommon, ...chart },
    data: data
  }

  return chartanddata
}