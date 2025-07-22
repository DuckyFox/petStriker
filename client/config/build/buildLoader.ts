import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoaders';
import { buildSvgLoader } from './loaders/buildSvgLoader';

// Основной файл настройки лоадеров
export default function buildLoaders(options: BuildOptions):webpack.RuleSetRule[] {

    // ts loader
    const typeScriptLoader:webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        // игнорируем /node_modules/
        exclude: /node_modules/,
    };

    // svg loader
    const svgLoader = buildSvgLoader();

    // css loader
    const cssLoader = buildCssLoader(options.isDev);

    // image loader
    const imageLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
    };

    // font loader
    const fontLoader = {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
    };

    // babel loader
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                'plugins': [
                    [
                        // плагин для работы в babel переводов
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