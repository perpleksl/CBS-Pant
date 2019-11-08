const form = document.forms[0];

form.elements['calc-btn'].addEventListener('click', function() {
    let total = parseInt(form.elements['amount'].value, 10);
    let count = selectedCheckboxes(form, 'organisation').length;
    document.getElementById('result').textContent = average(total, count).toFixed(2);
});

triggerEvent(form.elements['calc-btn'], 'click'); // Calculate on load

function average(total, count) {
    return count > 0 ? total / count : 0;
}

function selectedCheckboxes(form, name) {
    return Array.from(form.elements[name]).filter(c => c.checked);
}

function triggerEvent(el, eventName) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, true, false);
    el.dispatchEvent(event);
}

function myFunction() {
    var checkBox = document.getElementById("1");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
function myFunction1() {
    var checkBox = document.getElementById("2");
    var text = document.getElementById("text1");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
function myFunction2() {
    var checkBox = document.getElementById("3");
    var text = document.getElementById("text2");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}