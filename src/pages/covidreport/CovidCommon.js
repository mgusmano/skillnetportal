export function getFilters (responsesFiltered, filters) {
  if (filters.divisions !== '') {
    responsesFiltered = responsesFiltered.filter(response => response['jobrole'] === filters.divisions)
  }
  if (filters.countries !== '') {
    responsesFiltered = responsesFiltered.filter(response => response['countryofvisit'] === filters.countries)
  }
  var numCompleteArray = responsesFiltered.filter(response => response['status'] === "Complete")
  return numCompleteArray
}
