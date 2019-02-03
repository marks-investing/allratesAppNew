module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins:  [
            [require.resolve('babel-plugin-module-resolver'),
                {
                    root: ["./"],
                    alias: {
                        "style": "./src/style",
                        "navigation": "./src/navigation",
                        "screens":"./src/screens"
                    }
                }
            ]

        ]
    };
};
