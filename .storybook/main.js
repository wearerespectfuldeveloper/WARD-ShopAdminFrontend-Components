module.exports = {
  stories: ['../src/**/*.stories.(js|mdx|tsx)'],
  presets: ['@storybook/addon-docs/preset'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport/register'
  ],
};
