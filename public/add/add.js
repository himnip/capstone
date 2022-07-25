let nameInput= document.getElementById('name')

let urlInput = document.getElementById('url')

let reviewInput = document.getElementById('review')

let reviewForm = document.getElementById('book-review')


reviewForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    axios.post('/api/books', {
        name:nameInput.value, 
        img:urlInput.value, 
        desc:reviewInput.value
    }).then((res)=> {
       alert('Your review has been successfully submitted!') 
    })
});
