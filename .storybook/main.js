module.exports = {
  stories: ['../src/stories/**/*.stories.js'],
  presets: ['@storybook/addon-docs/preset'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs'
  ],
};
