export const theme = {
  colors: {
    white: '#FFFFFF',
    lightBeige: '#E9DFD4',
    lightSalmon: '#F6E8E8',
    brown: '#7C6D6D',
    blue: '#3484EF',
    red: '#F83030',
    black: '#000000',
  },
  fontSize: {
    xl: '24px',
    l: '17px',
    m: '12px',
    s: '11px',
  },
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
