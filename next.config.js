/** @type {import('next').NextConfig} */

const baseURL = process.env.BASEURL || ''

module.exports = {
  reactStrictMode: true,

  basePath: baseURL,
  assetPrefix: baseURL,
}
