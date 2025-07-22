import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoaders';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export default function buildLoaders(options: BuildOptions):webpack.RuleSetRule[] {

    const typeScriptLoader:webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = buildSvgLoader();

    const cssLoader = buildCssLoader(options.isDev);

    const imageLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
    };

    const fontLoader = {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                'plugins': [
                    [
                        'i18next-extract',
                        {
                            locales: ['en', 'ru'],
                            'keyAsDefaultValue': true,
                        },
                    ],
                ],
            },
        },
    };

    return [
        babelLoader,
        typeScriptLoader,
        svgLoader,
        cssLoader,
        imageLoader,
        fontLoader,
    ];
}