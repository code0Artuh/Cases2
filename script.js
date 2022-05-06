document.querySelector('#case').addEventListener('click', function() {
    var id = document.querySelector('#input_nome').value;
    window.location.replace(`case2/${id}`);
})