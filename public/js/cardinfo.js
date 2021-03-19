document.body.addEventListener('click', () => {
  console.log('click')
  currentCard = encodeURIComponent(document.querySelector('.act').src)
  console.log(currentCard);
  
})
const cardInfo = document.getElementById('card-info')
if(cardInfo){
  cardInfo.addEventListener('submit', async (e) => {
    e.preventDefault()
  
    const response = await fetch(`/card/${currentCard}`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({currentCard})
    })
  
    const resJSON = await response.json()
    console.log(resJSON.card._id)
  
    window.location = `/card/${resJSON.card._id}`
  })
}
