const path = require("path");
module.exports = {
    webpack: {
        alias: {
            '@actions': path.resolve(__dirname, 'src/actions/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@reducers': path.resolve(__dirname, 'src/reducers/'),
            '@selectors': path.resolve(__dirname, 'src/selectors'),
            '@store': path.resolve(__dirname, 'src/store/'),
        }
    }
}