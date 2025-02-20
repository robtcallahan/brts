window.toggleDiv = function() {
    let content = document.getElementById('service_details');
    let arrow = document.getElementById('arrow');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        arrow.textContent = '▼';
    } else {
        content.style.display = 'none';
        arrow.textContent = '▶';
    }
}
