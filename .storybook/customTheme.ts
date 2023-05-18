import { create } from '@storybook/theming/create';
import logo from '../public/static/logo.svg'

export const customTheme = create({
  base: 'light',
  brandTitle: 'My custom Storybook',
  // brandUrl: 'https://example.com',
  brandImage: logo,
  brandTarget: '_self',
  colorPrimary: '#3A10E5',
  colorSecondary: '#585C6D',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#ddd',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#ddd',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});