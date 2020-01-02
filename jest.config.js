module.exports = {
    "roots": [
        './dev/app'
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "coverageDirectory": "./test/coverage",
    "setupFilesAfterEnv": ["./setupTests.ts"],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    }
}