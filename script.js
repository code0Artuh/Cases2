document.querySelector('#case').addEventListener('click', function() {
    var id = document.querySelector('#input_nome').value;
    window.open = (`case2/${id}`, '_blank');
})