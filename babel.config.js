module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver'],
    ['transform-remove-console', { exclude: ['error', 'warn'] }]
  ],
  ignore: ['**/*.spec.ts']
}
