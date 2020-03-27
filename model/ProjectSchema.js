
const Fields = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');

const fileAdapter = new LocalFileAdapter({ src: "./static", path: "/static" });

module.exports = {
    fields: {
        type: {
            type: Fields.Text,
            isRequired: true
        },
        date: {
            type: Fields.Text,
            isRequired: true
        },
        name: {
            type: Fields.Text,
            isRequired: true
        },
        description: {
            type: Fields.Text,
            isRequired: true
        },
        image: {
            type: Fields.File,
            adapter: fileAdapter,
            isRequired: true,
        },
        tags: {
            type: Fields.Relationship,
            ref: "Tag",
            many: true
        },
        links: {
            type: Fields.Relationship,
            ref: "Link",
            many: true
        }
    }
};