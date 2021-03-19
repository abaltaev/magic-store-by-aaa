const buyBtn = document.getElementById('buyBtn');
console.log(buyBtn)

  buyBtn.addEventListener('click', async (e) => {
    e.preventDefault();
  
    console.log(2)
    const response = await fetch('/profile/forsale', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
    })
    const resJson = await response.json();
    console.log(resJson)
  });

  
  const deleteAll = document.getElementById('deleteAllBtn');
  console.log(deleteAll)

  deleteAll.addEventListener('click', async (e) => {
  e.preventDefault();
  console.log(2)
  const response = await fetch('/profile/forsale', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({


    })
  })
  const resJson = await response.json();
});

