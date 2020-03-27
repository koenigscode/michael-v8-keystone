const Fields = require('@keystonejs/fields');

module.exports = {
    fields: {
        text: {
            type: Fields.Text,
            isRequired: true
        },
        href: {
            type: Fields.Text,
        },
    },
    labelField: 'text'
};