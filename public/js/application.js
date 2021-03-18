const sellForm = document.getElementById('sell')
const sellDiv = document.getElementById('sellDiv')
//  console.log(sellForm, sellDiv);

sellForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  console.log(e.target.select.value)
  const response = await fetch('/profile/forsale', {
    method: 'POST',
    headers: {'Content-Type': 'Application/json'},
    body: JSON.stringify({    
      name: e.target.name.value,
      img: e.target.select.value,
      price: e.target.price.value,
      city: e.target.city.value,
      condition: e.target.condition.value
    })
  })
  // console.log(response)
  const resJson = await response.json();
  // console.log(resJson)
  sellDiv.innerHTML= `<div> ${resJson} </div>`
  // window.location = '/profile'
  
})
