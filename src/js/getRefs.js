export default function getRefs() {
  return {
    input: document.querySelector('input#search-box'),
    cardContainer: document.querySelector('.country-info'),
    cardList: document.querySelector('.country-list')
  }
}