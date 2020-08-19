module.exports = {
  preset: "react-native",
  testMatch: [ '**/?(*.)+(test.native).ts', '**/?(*.)+(test.native).tsx' ],
  moduleNameMapper: {
      "^@/(.*)$": "<rootDir>resources/js/$1",
      "^@native/(.*)$": "<rootDir>resources/js/bundles/native/$1"
  }
}