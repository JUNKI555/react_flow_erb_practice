# Rails custom validator practice

## rails new command
```bash
$ rails new . --minimal --skip-asset-pipeline --skip-bundle --database=mysql --force
```

## Reference sources
- rails newのskipオプションがどういう効果かわからない | Hid3 | zenn
  - https://zenn.dev/hid3/scraps/4a76a23f02c36d
- Rails7のnewコマンドのオプションが多すぎて分からなくなった時のために（フロントエンド多め） | Qiita
  - https://qiita.com/kyntk/items/0936598a903ac74e607d
- いい感じにrails newする rails newのオプション | Qiita
  - https://qiita.com/morioka1206/items/d9297cc5d5085422acac#--minimal
- 脳死 rails new するためのコマンド | Qiita
  - https://qiita.com/murakami-mm/items/0e2adf68de27dbf54461
- railsの全バージョン履歴
  - https://rubygems.org/gems/rails/versions
  - Rails と Ruby のバージョンサポートマトリクスは要確認
- Rails Active Job をとりえず使ってみる (with docker-compose) | 北山淳也 | zenn
  - https://zenn.dev/junki555/articles/a390d32d6f3c51

## まとまってないメモ
yarn add react react-dom reactflow
yarn add --dev @types/react @types/react-dom
yarn add --dev typescript rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-babel @babel/core @babel/preset-react rollup-plugin-peer-deps-external
touch rollup.config.js
touch .babelrc
yarn add --dev typescript rollup-plugin-typescript2
touch tsconfig.json

yarn add --dev rollup-plugin-import-css
yarn add --dev @rollup/plugin-replace


ダメだったやつ
```
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import css from "rollup-plugin-import-css";

export default [
  {
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
      css(),
      typescript(),
      nodeResolve(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
    ]
  },
  {
    input: 'frontend/src/lib/reactflowbase.tsx',
    output: {
      file: 'public/packs/js/lib/reactflow.js',
      format: 'iife',
      name: 'reactflowbase',
    },
    plugins: [
      commonjs(),
      nodeResolve(),
      typescript(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
    ]
  }
];
```

```js
import ReactFlow, { useReactFlow } from "reactflow";

const ReactFlowBase = () => {
  const reactFlowInstance = useReactFlow();
  return false;
};

export default ReactFlowBase;
```

```ts
import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";

const ReactFlowBase = () => {
  return (
    <div style={{ height: '100%' }}>
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default ReactFlowBase;
```
