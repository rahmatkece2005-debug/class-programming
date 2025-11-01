fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        const container =
            document.getElementById("products-list");
        console.log(data.products);

        data.products.forEach(item => {
            const item = document.createElement("div");
            item.innerHTML += `
           <div class="card" style="width: 18rem;">
             <img src="${item.thumbnail}" class="card-img-top" alt="${item.title}">
             <div class="card-body">
                 <h5 class="card-title">${item.title}</h5>
                 <p class="card-text">${item.price}</p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
        </div>
            `;
            container.appendChild(item);
        });
    })
    .catch(err => console.error("terjadi kesalahan:", err));