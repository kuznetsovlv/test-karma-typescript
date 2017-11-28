module.exports = (config) => {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            { pattern: "lesson/**/*.ts" }
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"],
        },
        reporters: ["progress", "karma-typescript"],
        browsers: ["Chrome"],
        singleRun:"true",
        karmaTypescriptConfig: {
            reports:
            {
                "html": "coverage",
                "text-summary": ""
            }
        }
    });
};