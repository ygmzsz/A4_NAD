console.log("hello world!")

const helloWorldBox = document.getElementById('hello-world')
const postBox = document.getElementById('posts-box')
const spinnerBox = document.getElementById('spinner-box')

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
       setTimeout(()=>{
        spinnerBox.classList.add('not-visible')
        console.log(data)
        data.forEach(element => {
            postBox.innerHTML += `
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.body}</p>
                </div>
                <div class="card-footer">
                    <div class="row">
                        <div class="col-1">
                            <a href="#" class="btn btn-primary">Details</a>
                        </div>
                        <div class="col-1">
                            <a href="#" class="btn btn-primary">like</a>
                        </div>
                    </div>        
                </div>
            </div> 
            `
        });
       }
    )
    },
    error: function(error) { 
        console.log('error:', error)
    }
})