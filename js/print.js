var _print = window.print;

window.print = function() {
    [...acc].forEach(function(elem) {
        elem.classList.toggle("active", true);
        elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
    });
    _print();
 }