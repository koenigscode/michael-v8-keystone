
const Fields = require('@keystonejs/fields');

module.exports = {
    fields: {
        name: {
            type: Fields.Text,
            isRequired: true
        },
        description: {
            type: Fields.Text,
            isRequired: true

        }
    },
};