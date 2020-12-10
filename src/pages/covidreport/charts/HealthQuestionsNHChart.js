import chartcommon from './ChartCommon'

export function getHealthQuestionsNHChart(healthquestionsNH) {

  //var categoryArray = []
  var dataArray = []
  for (const [key, value] of Object.entries(healthquestionsNH)) {
    //var c = {label: key}
    //categoryArray.push(c)
    var v = {value: value}
    dataArray.push(v)
  }

  var chart = {
    caption: "Health Questions - New Hampshire",
    maxBarHeight: 50,
    yAxisMaxValue: 10,
    yAxisMinValue: 10,
  }
  var categories = [
    {
      category: [
        {label: "1. Do you have any symptoms of COVID-19?"},
        {label: "2. Have you been in close contact with someone who is suspected or confirmed to have had COVID-19 in the past 14 days?"},
        {label: "3. Have you traveled on non-essential travel in the past 14 days outside of New England?"},
      ]
    }
  ]
  var dataset = [
    {
      seriesname: "Number of People who Answered Yes",
      data: dataArray
    }
  ]
  var chartanddata = {
    chart: {...chartcommon, ...chart },
    categories: categories,
    dataset: dataset
  }
  return chartanddata
}