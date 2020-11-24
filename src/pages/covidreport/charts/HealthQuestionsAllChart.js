import chartcommon from './ChartCommon'

export function getHealthQuestionsChart(healthquestions) {
  console.log(healthquestions)
  //var categoryArray = []
  var dataArray = []
  for (const [key, value] of Object.entries(healthquestions)) {
    //var c = {label: key}
    //categoryArray.push(c)
    var v = {value: value}
    dataArray.push(v)
  }



  var chart = {
    caption: "Health Questions",
    maxBarHeight: 50,
  }
  var categories = [
    {
      category: [
        {label: "1. In the past 14 days, have you been confirmed positive for COVID-19, presumed positive, or been asked to self-quarantine?"},
        {label: "2. In the past 14 days, have you had contact with a person known or presumed to have COVID-19?  (i.e., Secondary Exposure)?"},
        {label: "3. In the past 14 days, have you experienced any symptoms associated with COVID-19?"},
        {label: "4. Do you have any of the following symptoms of COVID-19:"},
        {label: "5. Have you been in close contact with someone who is suspected or confirmed to have had COVID-19 in the past 14 days?"},
        {label: "6. Have you traveled on non-essential travel in the past 14 days outside of New Hampshire, Vermont, Maine, Massachusetts, Connecticut, or Rhode Island?"},
        {label: "7. Do you have any medical conditions that would prevent you from wearing a face covering at work?"},
      ]
    }
  ]
  var dataset = [
    {
      seriesname: "yes",
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