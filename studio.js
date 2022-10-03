var myOptions = document.querySelectorAll("option")

VirtualSelect.init({
    ele: '#services',
    options: myOptions,
    multiple: true,
    placeholder: 'Select services here'
});