function calculatorInitialize() {
    const elements = [
        {type: 'input', value: '1000', style: 'sublabels__label', place: 'root__sublabels'},
        {type: 'input', value: '2000', style: 'sublabels__label', place: 'root__sublabels'},
        {type: 'input', value: '3000', style: 'sublabels__label', place: 'root__sublabels'},
        {type: 'input', value: '4000', style: 'sublabels__label', place: 'root__sublabels'},
        {type: 'input', value: '5000', style: 'sublabels__label', place: 'root__sublabels'},
        {type: 'input', value: '6000', style: 'sublabels__label', place: 'root__sublabels'},
        {type: 'input', value: '\=123456789', style: 'mainlabel__label', place: 'root__mainlabel'},
        {type: 'button', value: 'C', style: 'buttons__button function', place: 'root__buttons'},
        {type: 'button', value: '&#177', style: 'buttons__button function', place: 'root__buttons'},
        {type: 'button', value: '%', style: 'buttons__button function', place: 'root__buttons'},
        {type: 'button', value: '&#247', style: 'buttons__button action', place: 'root__buttons'},
        {type: 'button', value: '7', style: 'buttons__button number', place: 'root__buttons'},
        {type: 'button', value: '8', style: 'buttons__button number', place: 'root__buttons'},
        {type: 'button', value: '9', style: 'buttons__button number', place: 'root__buttons'},
        {type: 'button', value: '&#215', style: 'buttons__button action', place: 'root__buttons'},
        {type: 'button', value: '4', style: 'buttons__button number', place: 'root__buttons'},
        {type: 'button', value: '5', style: 'buttons__button number', place: 'root__buttons'},
        {type: 'button', value: '6', style: 'buttons__button number', place: 'root__buttons'},
        {type: 'button', value: '-', style: 'buttons__button action', place: 'root__buttons'},
        {type: 'button', value: '1', style: 'buttons__button number', place: 'root__buttons'},
        {type: 'button', value: '2', style: 'buttons__button number', place: 'root__buttons'},
        {type: 'button', value: '3', style: 'buttons__button number', place: 'root__buttons'},
        {type: 'button', value: '+', style: 'buttons__button action', place: 'root__buttons'},
        {type: 'button', value: '0', style: 'buttons__button number zero', place: 'root__buttons'},
        {type: 'button', value: '.', style: 'buttons__button number', place: 'root__buttons'},
        {type: 'button', value: '=', style: 'buttons__button action', place: 'root__buttons'},
    ];
    for (let key of elements.keys()) {
        calculatorElementGenerator(elements[key])
    };
};

function calculatorElementGenerator(elementGenerator) {
    const calculatorPlace = document.getElementById(elementGenerator.place);
    const calculatorElement = document.createElement(elementGenerator.type);
    calculatorElement.className = elementGenerator.style;
    switch (elementGenerator.type) {
        case 'input':
            calculatorElement.value = elementGenerator.value;
            break;
        case 'button':
            calculatorElement.innerHTML = elementGenerator.value;
    };
    calculatorPlace.append(calculatorElement);
};

calculatorInitialize();