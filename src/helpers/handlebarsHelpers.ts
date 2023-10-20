import Handlebars from 'handlebars';

Handlebars.registerHelper('ifeq', function (a, b, options) {
    if (a == b) {
        // @ts-ignore
        return options.fn(this);
    }

    // @ts-ignore
    return options.inverse(this);
});

Handlebars.registerHelper('ifnoteq', function (a, b, options) {
    if (a != b) {
        // @ts-ignore
        return options.fn(this);
    }

    // @ts-ignore
    return options.inverse(this);
});

Handlebars.registerHelper("setVar", function(varName, varValue, options) {
    options.data.root[varName] = varValue;
});
