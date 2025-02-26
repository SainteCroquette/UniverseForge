module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            alias: {
                map: [
                    ['@', './src'],
                    ['@styles', './src/assets/styles'],
                    ['@atoms', './src/adapters/primary/components/atoms'],
                    ['@molecules', './src/adapters/primary/components/molecules'],
                    ['@organisms', './src/adapters/primary/components/organisms'],
                    ['@templates', './src/adapters/primary/components/templates'],
                    ['@pages', './src/adapters/primary/pages'],
                    ['@domain', './src/domain'],
                    ['@gateways', './src/adapters/secondary/gateways'],
                    ['@core', './src/core'],
                    ['@services', './src/services']
                ],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'react/react-in-jsx-scope': 'off',
    },
};
