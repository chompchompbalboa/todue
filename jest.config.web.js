module.exports = {
  testMatch: [ '**/?(*.)+(test).ts', '**/?(*.)+(test).tsx' ],
  moduleNameMapper: {
      "^@/(.*)$": "<rootDir>resources/js/$1",
      "^@web/(.*)$": "<rootDir>resources/js/bundles/web/$1"
  }
}