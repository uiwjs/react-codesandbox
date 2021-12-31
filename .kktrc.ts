import path from 'path';
import webpack, {Configuration} from 'webpack';
import { LoaderConfOptions } from 'kkt';
import lessModules from '@kkt/less-modules';
import rawModules from '@kkt/raw-modules';
import scopePluginOptions from '@kkt/scope-plugin-options';
import pkg from './package.json';

export default (conf: Configuration, env: 'development' | 'production', options: LoaderConfOptions) => {
  conf = rawModules(conf, env, { ...options });
  conf = scopePluginOptions(conf, env, {
    ...options,
    allowedFiles: [
      path.resolve(process.cwd(), 'README.md')
    ]
  });
  conf = lessModules(conf, env, options);
  // Get the project version.
  conf.plugins!.push(new webpack.DefinePlugin({
    VERSION: JSON.stringify(pkg.version),
  }));

  if (conf.module && conf.module.rules && conf.module.rules[0]) {
    const rules = conf.module.rules[0];
    if (typeof rules === 'object' && typeof rules.loader === 'string' && /source-map-loader/.test(rules.loader)) {
      ;(conf.module.rules[0] as any).exclude = /((@babel(?:\/|\\{1,2})runtime)|codesandbox-import-utils)/;
    }
  }

  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' }
  }
  return conf;
}
