import chartcommon from './ChartCommon'

export function getHealthQuestionsChart(healthquestions) {
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
    yAxisMaxValue: 10,
    yAxisMinValue: 10,
  }
  // var categories = [
  //   {
  //     category: [
  //       {label: "1. In the past 14 days, have you been confirmed positive for COVID-19 or presumed positive?"},
  //       {label: "2. In the past 14 days, have you had contact with a person known or presumed to have COVID-19?"},
  //       {label: "3. In the past 14 days, have you experienced any symptoms associated with COVID-19?"},
  //       {label: "4. Do you have any medical conditions that would prevent you from wearing a face covering?"},
  //     ]
  //   }
  // ]
  // var categories = [
  //   {
  //     category: [
  //       {label: "1. Have you experienced any of the following symptoms in the past 48 hours: fever or chills, cough, shortness of breath or difficulty breathing, fatigue, muscle or body aches, headache, new loss of taste or smell, sore throat, congestion or runny nose, nausea or vomiting, diarrhea?"},
  //       {label: "2. Within the past 14 days, have you been in close physical contact with a person who is known to have COVID-19, or has symptoms consistent with COVID-19?"},
  //       {label: "3. Are you isolating or quarantining because you may have been exposed to COVID-19, or are worried you may be sick with COVID-19?"},
  //       {label: "4. Are you or a member of your household currently waiting on the results of a COVID-19 test?"},
  //       {label: "5. In the past 14 days, have you traveled to a location identified with widespread transmission of COVID-19?"},
  //       {label: "6. Do you have any medical conditions that would prevent you from wearing a face covering?"}
  //     ]
  //   }
  // ]
  var categories = [
    {
      category: [
        {label: "1. In the past 48 hours, have you experienced any of the following symptoms that are not attributed to a known pre-existing condition: fever or chills, cough, shortness of breath or difficulty breathing, unexpected fatigue, generalized muscle or body aches, headache that is new or different for you, loss of taste or smell, sore throat, congestion or runny nose, nausea, vomiting or diarrhea?"},
        {label: "2. Within the past 14 days, have you been in close physical contact (generally defined as 6 feet or closer for a cumulative total of 15 minutes) with anyone who is known or suspected to have COVID-19, or has symptoms consistent with COVID-19?"},
        {label: "3. Are you isolating or quarantining because you may have been exposed to COVID-19, or are you worried you may be sick with COVID-19?"},
        {label: "4. Are you, or is a member of your household, currently waiting on the results of a COVID-19 test?"},
        {label: "5. In the past 14 days, have you traveled to a location identified with widespread transmission of COVID-19?"},
        //mjg {label: "6. Do you have any medical conditions that would prevent you from wearing a face covering?"}
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