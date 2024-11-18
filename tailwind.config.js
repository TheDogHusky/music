/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        "primary": {
          '50': '#effefc',
          '100': '#cafdf8',
          '200': '#94fbf2',
          '300': '#57f1ea',
          '400': '#22d5d2',
          '500': '#0cc0c0',
          '600': '#06999b',
          '700': '#0a787b',
          '800': '#0d5f62',
          '900': '#104f51',
          '950': '#022d31',
          DEFAULT: '#22d5d2'
        },
        "secondary": {
          '50': '#eef5ff',
          '100': '#d9e8ff',
          '200': '#bcd7ff',
          '300': '#8ebeff',
          '400': '#599aff',
          '500': '#3777ff',
          '600': '#1b52f5',
          '700': '#143ee1',
          '800': '#1733b6',
          '900': '#19308f',
          '950': '#141f57',
          DEFAULT: '#3777ff'
        },
        "gray": {
          "50": "#f7f7f7",
          "100": "#ededed",
          "200": "#dfdfdf",
          "300": "#bbbbbb",
          "400": "#adadad",
          "500": "#999999",
          "600": "#888888",
          "700": "#7b7b7b",
          "800": "#676767",
          "900": "#545454",
          "950": "#363636",
          DEFAULT: '#bbbbbb'
        },
        "slate": {
          DEFAULT: '#282c34',
          '50': '#f6f7f9',
          '100': '#edeef1',
          '200': '#d6dae1',
          '300': '#b2bac7',
          '400': '#8895a8',
          '500': '#6a798d',
          '600': '#546175',
          '700': '#454f5f',
          '800': '#3c4450',
          '900': '#353b45',
          '950': '#282c34',
        },
        'bunker': {
          '50': '#f6f7f9',
          '100': '#edeef1',
          '200': '#d6dae1',
          '300': '#b2b9c7',
          '400': '#8995a7',
          '500': '#6a778d',
          '600': '#555f74',
          '700': '#454e5f',
          '800': '#3c4350',
          '900': '#353a45',
          '950': '#181a1f',
        },
        'woodsmoke': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#282828',
          '950': '#141414',
        }
      },
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      function extractColorVars (colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];
          const cssVariable = colorKey === "DEFAULT" ? `--color${colorGroup}` : `--color${colorGroup}-${colorKey}`;

          const newVars =
              typeof value === 'string'
                  ? { [cssVariable]: value }
                  : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
}

