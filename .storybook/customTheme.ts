import { create } from '@storybook/theming/create';
import logo from '../public/static/logo.svg'

export const customTheme = create({
  base: 'light',
  brandTitle: 'My custom Storybook',
  brandImage: logo,
  brandTarget: '_self',
  colorPrimary: '#000',
  colorSecondary: '#222222',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#F5F5F5',
  appBorderRadius: 4,

  // Text colors
  textColor: '#000',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#000',
  barSelectedColor: '#000',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#F5F5F5',
  inputTextColor: '#000',
  inputBorderRadius: 2,
});