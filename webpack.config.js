const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

const src = fs.readdirSync(path.join(__dirname, 'src')).map(file => {
    return {
        name: file,
        file: path.join(__dirname, 'src', file)
    };
}).reduce(function (acc, cur, i) {
    acc[cur.name] = cur.file;
    return acc;
}, {});

module.exports = {
    entry: './src/Demo.ts',
    module: {
        rules: [
            {
                 test: /\.ts$/, 
                 use: 'ts-loader',
                 exclude: '/node_modules'
            }
        ]
    },
    resolve: {
        extensions: [".ts",".js"],
    },

    output: {
        path: path.join(__dirname, "www", "Bundles"),
        pathinfo: true,
        filename: "bundle.js"
    },
    

    // node: {
    //     Buffer: false,
    //     fs: "empty"
    // }
}