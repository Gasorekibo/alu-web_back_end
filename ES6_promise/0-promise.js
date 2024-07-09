function getResponseFromAPI() {
  return Promise.resolve()
}
const resp = getResponseFromAPI()
console.log(resp instanceof Promise)