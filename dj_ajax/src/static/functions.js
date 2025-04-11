const handleAlerts = (type, msg) => {
    const alertBox = document.getElementById('alert-box')
    alertBox.innerHTML = ` 
        <div class="alert alert-${type}" role="alert">
            ${msg}
        </div>
    `
}

window.handleAlerts = handleAlerts;