import resolve from 'rollup-plugin-node-resolve'
import commonJs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
  external: [
    '@fortawesome/fontawesome',
    'prop-types',
    'react'
  ],
  globals: {
    '@fortawesome/fontawesome': 'FontAwesome',
    'react': 'React',
    'prop-types': 'PropTypes'
  },
  input: 'src/index.js',
  name: 'react-fontawesome',
  output: {
    format: 'umd',
    file: 'index.js'
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    commonJs(),
    babel({
      babelrc: false,
      presets: [
        ["es2015", { "modules": false }], 
        "react",
        "stage-3"
      ],
      exclude: 'node_modules/**'
    })
  ]
}
