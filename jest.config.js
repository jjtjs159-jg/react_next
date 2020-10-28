module.exports = {
    testMatch: ['**/*.test.tsx'],
    verbose: true,
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleDirectories: [
        // '<rootDir>/node_modules',
        './node_modules',
        '<rootDir>/src',
    ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy",
    },
}