// https://yeun.github.io/open-color/
const palette = {
  /* gray */
  gray0: '#F8F9FA',
  gray1: '#F1F3F5',
  gray2: '#E9ECEF',
  gray3: '#DEE2E6',
  gray4: '#CED4DA',
  gray5: '#ADB5BD',
  gray6: '#868E96',
  gray7: '#495057',
  gray8: '#343A40',
  gray9: '#212529',
  /* teal */
  teal0: '#F3FFFB',
  teal1: '#C3FAE8',
  teal2: '#96F2D7',
  teal3: '#63E6BE',
  teal4: '#38D9A9',
  teal5: '#20C997',
  teal6: '#12B886',
  teal7: '#0CA678',
  teal8: '#099268',
  teal9: '#087F5B',
  /* pink */
  pink0: '#fff0f6',
  pink1: '#ffdeeb',
  pink2: '#fcc2d7',
  pink3: '#faa2c1',
  pink4: '#f783ac',
  pink5: '#f06595',
  pink6: '#e64980',
  pink7: '#d6336c',
  pink8: '#c2255c',
  pink9: '#a61e4d',
  /* violet */
  violet0: '#f3f0ff',
  violet1: '#e5dbff',
  violet2: '#d0bfff',
  violet3: '#b197fc',
  violet4: '#9775fa',
  violet5: '#845ef7',
  violet6: '#7950f2',
  violet7: '#7048e8',
  violet8: '#6741d9',
  violet9: '#5f3dc4',
  /* indigo */
  indigo0: '#edf2ff',
  indigo1: '#dbe4ff',
  indigo2: '#bac8ff',
  indigo3: '#91a7ff',
  indigo4: '#748ffc',
  indigo5: '#5c7cfa',
  indigo6: '#4c6ef5',
  indigo7: '#4263eb',
  indigo8: '#3b5bdb',
  indigo9: '#364fc7',
};

export const buttonColorMap = {
  gray: {
    background: palette.gray5,
    color: palette.gray0,
    hoverBackground: palette.gray4,
  },
  pink: {
    background: palette.pink5,
    color: palette.gray0,
    hoverBackground: palette.pink4,
  },
  teal: {
    background: palette.teal6,
    color: palette.gray0,
    hoverBackground: palette.teal5,
  },
};

export default palette;
