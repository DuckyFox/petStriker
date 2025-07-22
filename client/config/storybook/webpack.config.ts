import type webpack from 'webpack';
import { BuildPath } from '../build/types/config';
import path from 'node:path';
import { buildCssLoader } from '../build/loaders/buildCssLoaders';
import { RuleSetRule } from 'webpack';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        static: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules = config.module.rules.map((rule:RuleSetRule) => {
        if(/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/  };
        }

        return rule;
    });

    config.module.rules.push(buildCssLoader(true));
    config.module.rules.push(buildSvgLoader());

    return config;
};