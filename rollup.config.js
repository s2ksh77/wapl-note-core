import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import { babel } from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';
import strip from '@rollup/plugin-strip';
import { visualizer } from 'rollup-plugin-visualizer';
import ttypescript from 'ttypescript';
import del from 'rollup-plugin-delete';
import pkg from './package.json';

const extensions = [
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.json',
  '.css',
  '.scss',
  '.sass',
  '.d.ts',
];
const plugins = [
  peerDepsExternal(),
  nodeResolve({ extensions }),
  commonjs({
    include: /node_modules/,
  }),
  alias({
    entries: {
      '~': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src/apps/talk'),
    },
  }),
  json(),
  postcss(),
  babel({
    babelHelpers: 'bundled',
    plugins: [
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
    ],
    exclude: 'node_modules/**',
  }),
  typescript({
    rollupCommonJSResolveHack: true,
    useTsconfigDeclarationDir: true,
    typescript: ttypescript,
  }),
  del({
    targets: 'dist/dts/*',
  }),
  visualizer(),
];
// NOTE: 플랫폼 외부 프로젝트에 사용할 경우 external 수정 필요 (겹치는 파일 제거)
const external = [
  'react-dnd',
  'react-dnd-html5-backend',
  'i18next',
  'react-i18next',
  'teespace-drive-app',
  'moment',
  'moment-timezone',
  'moment/locale/ko',
  'moment/locale/en-gb',
  'quill',
  'quill-mention',
  'react-quill',
  'lodash',
  'react-router-dom',
];

switch (process.env.NODE_ENV) {
  case 'production':
    plugins.push(uglify());
    plugins.push(strip());
    break;
  case 'staging':
    plugins.push(strip());
    break;
  default:
}

export default [
  {
    input: './src/external.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'esm',
      },
    ],
    plugins,
    external,
  },
];
