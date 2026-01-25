const isProd = process.env.NODE_ENV === 'production'

export default {
  reactCompiler: true,
  output: 'export',
  basePath: isProd ? '/maimom' : '',
  assetPrefix: isProd ? '/maimom/' : '',
  images: {
    unoptimized: true
  }
}
