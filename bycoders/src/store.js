import { reactive } from 'vue'

const store = reactive({
  searchResults: [],
  searchQuery: '',
  mainVideo: '',
  historicSearch: [],

  setResults(newResults) {
    this.searchResults = newResults
  },
  setSearchQuery(newQuery) {
    this.searchQuery = newQuery
  },
  setSearch(query, results) {
    this.searchQuery = query
    this.searchResults = results
    this.mainVideo = ''

    if (query != '') {
      if (this.historicSearch.includes(query)) {
        this.historicSearch.splice(this.historicSearch.indexOf(query), 1)
        this.historicSearch.unshift(query)  
      } else {
        this.historicSearch.unshift(query)
      }
      this.historicSearch = this.historicSearch.slice(0, 7)
    }
  },
  setMainVideo (url) {
    this.mainVideo = url
  }
})

export default store