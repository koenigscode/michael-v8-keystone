
const Fields = require('@keystonejs/fields');

module.exports = {
    fields: {
        name: {
            type: Fields.Text,
            isRequired: true
        },
        link: {
            type: Fields.Text,
        },
        iconClass: {
            type: Fields.Text,
            isRequired: true
        },
        description: {
            type: Fields.Text
        }
    }
};