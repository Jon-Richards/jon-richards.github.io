module.exports = {
    "roots": [
        './dev/app'
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "coverageDirectory": "./test/coverage",
    "setupFilesAfterEnv": ["./setupTests.ts"],
    // "snapshotSerializers": ["enzyme-to-json/serializer"],
    "snapshotSerializers": ["jest-emotion", "enzyme-to-json/serializer"],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^Action_creators(.*)$": "<rootDir>/dev/app/action_creators$1",
        "^Config(.*)$": "<rootDir>/dev/app/config$1",
        "^Lib(.*)$": "<rootDir>/dev/app/lib$1",
        "^Store(.*)$": "<rootDir>/dev/app/store$1",
        "^Views(.*)$": "<rootDir>/dev/app/views$1",
        "^Vendor(.*)$": "<rootDir>/dev/app/vendor$1",
        "^Test(.*)$": "<rootDir>/test$1",
    }
}