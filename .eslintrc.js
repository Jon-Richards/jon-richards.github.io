module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "extends": [
        "eslint:recommended", 
        "google", 
        "plugin:react/recommended",
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "prettier/prettier": "error",
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": [
            "warn",
            {
                allow: [
                    "warn",
                    "error"
                ]
            }
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "comma-dangle": ["error", {
            "arrays": "always",
            "objects": "always",
            "imports": "ignore",
            "exports": "ignore",
            "functions": "ignore"
        }]
    }
};