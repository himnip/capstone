axios.get('/api/books').then((res)=>{
    console.log(res)
    let novels = document.getElementById('novel')
    for (let i = 0; i < res.data.length; i++) {
        let book = res.data[i]
        let div = document.createElement('div')
        div.innerHTML = `
        <h1>${book.name}</h1>
        <div class="responsive">
            <div class="gallery">
                <img src="${book.img}" alt="" width="300" height="300">
              <div class="desc">${book.desc}</div>
            </div>
          </div>
        `

        novels.appendChild(div)
    }
})

