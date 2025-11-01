// let buah = ["mangga", "apel", "jeruk"];

// buah.forEach(function (item) {
//     console.log(item);
//     document.getElementById("buahContainer").innerHTML += `<li>${item}</li>`

// });

let buku = [
    {
        judul: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        tahun: 2005,
    },
    {
        judul: "Bumi Manusia",
        penulis: "Pramoedya Ananta Toer",
        tahun: 1980,
    },
    {
        judul: "Negeri 5 Menara",
        penulis: "Ahmad Fuadi",
        tahun: 2009,
    },

];
buku.forEach(function (item, index) {
    console.log(item.judul);
    document.getElementById("bukuContainer").innerHTML += `<tr>
                <th scope="row">${index + 1}</th>
                <td>${item.judul}</td>
                <td>${item.penulis}</td>
                <td>${item.tahun}</td>
                
            </tr>`
    //`<li>judul: ${item.judul}, penulis:  ${item.penulis}, tahun:  ${item.tahun}</li>`

});
