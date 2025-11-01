fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        data.products.forEach(item => {
            document.getElementById("produkcontainer").innerHTML += `
            <div class="card p-3" style="width: 18rem;">
             <img src="${item.thumbnail}" class="card-img-top" alt="${item.title}">
             <div class="card-body">
                 <h5 class="card-title">${item.title}</h5>
                 <p class="card-text">${item.price}</p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
        </div>`

        });

    });
