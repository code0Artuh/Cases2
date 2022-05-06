var id = document.querySelector('#input_nome').value;
var link = document.createElementNS("cases2", "a");
    link.href = `cases2/${id}`;
    link.target = '_blank';
    var event = new MouseEvent('click', {
        'view': window,
        'bubbles': false,
        'cancelable': true
    });
    link.dispatchEvent(event);