/* eslint-disable @typescript-eslint/no-empty-function */
import { GetServerSideProps } from 'next'
import fs from 'fs'
import path from 'path'

export default function Sitemap() {}

type Url = {
  host: string
  route: string
  date?: Date
}

const excludedRoutes: Array<string> = ['/sitemap', '/404', '/index']

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const basePath: string = process.cwd()
  const host = 'https://movieau.carlosberti.dev'

  const pagesPath = path.join(basePath + '/.next/server/pages/')
  let routes: Array<Url> = GetPathsFromBuildFolder(
    pagesPath,
    [
      {
        host: 'https://movieau.carlosberti.dev',
        route: ''
      }
    ],
    host,
    pagesPath
  )

  routes = routes.filter((el) => !excludedRoutes.includes(el.route))
  const sitemap: string = GetSitemapXml(routes)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
  return { props: {} }
}

const GetPathsFromBuildFolder = (
  dir: string,
  urlList: Array<Url>,
  host: string,
  basePath: string
): Array<Url> => {
  const dirContent: string[] = fs.readdirSync(dir)
  urlList = urlList || []

  dirContent.forEach((dirItem) => {
    if (fs.statSync(dir + dirItem).isDirectory()) {
      urlList = GetPathsFromBuildFolder(
        dir + dirItem + '/',
        urlList,
        host,
        basePath
      )
    } else {
      if (path.extname(dirItem) == '.json') {
        let route = path.join(dir + dirItem.substring(0, dirItem.length - 5))
        route = route.replace(basePath, '/')
        urlList.push({ host: host, route: route })
      }
    }
  })

  return urlList
}

const GetUrlElement = ({ host, route, date }: Url): string => {
  if (date) {
    return `<url><loc>${host}${route}</loc><lastmod>${date}</lastmod></url>`
  } else return `<url><loc>${host}${route}</loc></url>`
}

const GetSitemapXml = (
  urls: Array<Url>
): string => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((url) => GetUrlElement(url)).join('')}
    </urlset>`
