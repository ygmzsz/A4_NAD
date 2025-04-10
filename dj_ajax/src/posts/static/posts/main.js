console.log("hello world!")

const helloWorldBox = document.getElementById('hello-world')
const postBox = document.getElementById('posts-box')

$.ajax({
    type: 'GET', 
    url: '/hello-world/',
    success: function(response) {
        console.log('success', response)
        helloWorldBox.innerHTML = response.text 
    },
    error: function(error) {  
        console.log('error:', error)
    }
})

$.ajax({
    type: 'GET',
    url: '/data/',
    success: function(response) {
        console.log('success', response)
        const data = response.data  
        console.log(data)
        data.forEach(element => {
            postBox.innerHTML += `
            ${element.title} - <b>${element.body}</b><br>
            `
        });
    },
    error: function(error) { 
        console.log('error:', error)
    }
})