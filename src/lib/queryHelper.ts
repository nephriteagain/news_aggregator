interface params {
  q?: string,
  searchIn?: string,
  sources?: string,
  domains?: string,
  excludeDomains?: string,
  from?: string,
  to?: string,
  language?: string,
  sortBy?: string,
  pageSize?: string,
  page?: string,
  country?: string,
  category?: ('business'|'entertainment'|'general'|'health'|'science'|'sports'|'technology'),

}


// to be added types
export function queryHelper(params : params, endpoint : string) {
  let queryString = ''
        if (params) {
          for (const [key, value] of Object.entries(params)) {
            if (key) {
              queryString = queryString.concat(`${key}=`)
            }
            if (value) {
              queryString = queryString.concat(String(value))
            }        
          }
          return `/${endpoint}?${queryString}`
        } else {
          return `/${endpoint}`
        }
}