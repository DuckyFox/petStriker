// Настраиваем лоадер svg картинок
export function buildSvgLoader() {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
}