console.log("hello world!")

const helloWorldBox = document.getElementById('hello-world')

$.ajax({
    typeo: 'Get',
    url: '/hello-world/',
    success: function(response)
    {
        console.log('success', response)
    },
    erro: function(error)
    {
        console.log('error:', error)
    }
})