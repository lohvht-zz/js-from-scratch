// @flow

export const isProd = process.env.NODE_ENV === 'production'
export const host = process.env.HOST || 'localhost'
export const port = process.env.PORT || 7001
