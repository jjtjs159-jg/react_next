const dotenv = require('dotenv');
const webpack = require('webpack');

dotenv.config();

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "API_URL": JSON.stringify(process.env.API_URL),
            }
        }),
    ],
}