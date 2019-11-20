import nodeResolve from 'rollup-plugin-node-resolve';
import {sizeSnapshot} from 'rollup-plugin-size-snapshot';
import notify from 'rollup-plugin-notify';
import tscompile from 'typescript';
import typescript from 'rollup-plugin-typescript';
import extensions from 'rollup-plugin-extensions';

import pkg from "./package.json"
const name = "CRUD";
const input = "./modules/index.ts"


const globals = {
  react: "React",
  'react-dom':'react-dom',
  "vue":"vue",
  "prop-types":"PropTypes"
};
const external = id => !id.startsWith(".") && !id.startsWith("\/");

export default [
  {
    input,
    output: {file: `cjs/index.js`, format: 'cjs'},
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      typescript({typescript: tscompile}),
      sizeSnapshot(),
      notify(),
      extensions({extensions: ['.ts', '.js']})
    ]
  },
  {
    input,
    output: {file: `umd/index.js`, format: 'umd', name},
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      typescript({typescript: tscompile}),
      extensions({extensions: ['.ts', '.js']}),
      sizeSnapshot(),
      notify()
    ]
  }
];
