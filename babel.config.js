module.exports = {
    presets: [
        "@babel/preset-react",
        ["@babel/preset-env", {
            targets: {
                browsers: [
                    "last 8 Chrome versions",
                    "last 8 FireFox versions",
                    "last 4 Safari versions",
                    "last 4 Edge versions",
                    "Explorer 11"
                ]
            }
        }],
    ]
};
