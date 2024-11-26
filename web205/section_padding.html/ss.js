fetch('https://nykaa-69cc3-default-rtdb.firebaseio.com/product.json')
    .then((res)=>res.json())
    .then((data)=>console.log(data))