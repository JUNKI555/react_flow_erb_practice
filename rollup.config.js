import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
// import peerDepsExternal from "rollup-plugin-peer-deps-external";
import replace from '@rollup/plugin-replace';
import typescript from "rollup-plugin-typescript2";
// import css from "rollup-plugin-import-css";

const { PRODUCTION } = process.env

export default {
  input: 'frontend/src/CustomElements/FlowChartElement.tsx',
  output: {
    file: 'public/packs/js/flow-chart.js',
    format: 'iife',
    name: 'FlowChartElement',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
  },
  external: ['react', 'react-dom'],
  plugins: [
    commonjs(),
    typescript(),
    nodeResolve(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
         PRODUCTION ? 'production' : 'development'
       )
    }),
  ]
};
