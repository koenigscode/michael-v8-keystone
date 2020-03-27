const Fields = require('@keystonejs/fields');

module.exports = {
    fields: {
        text: {
            type: Fields.Text,
            isRequired: true
        },
    },
    labelField: 'text'
};