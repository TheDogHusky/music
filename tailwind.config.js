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
        }
      }
    },
  },
  plugins: [],
}
