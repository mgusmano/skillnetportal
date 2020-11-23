export function getFilters (responsesFiltered, filters) {

console.log(filters)

  if (filters.divisions !== '') {
    responsesFiltered = responsesFiltered.filter(response => response['jobrole'] === filters.divisions)
  }
  if (filters.countries !== '') {
    responsesFiltered = responsesFiltered.filter(response => response['countryofvisit'] === filters.countries)
  }


  responsesFiltered = responsesFiltered.filter(response => new Date(response['dateofvisit']) >= new Date(filters.startdate))
  responsesFiltered = responsesFiltered.filter(response => new Date(response['dateofvisit']) <= new Date(filters.enddate))

  //responsesFiltered = responsesFiltered.filter(response => new Date(response['dateofvisit']) >= new Date('10/14/2020'))
  //responsesFiltered = responsesFiltered.filter(response => new Date(response['dateofvisit']) <= new Date('12/08/2020'))



  var numCompleteArray = responsesFiltered.filter(response => response['status'] === "Complete")
  return numCompleteArray
}
