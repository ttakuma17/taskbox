// .storybook/main.js

module.exports = {
  //👇 Location of our stories
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
};
