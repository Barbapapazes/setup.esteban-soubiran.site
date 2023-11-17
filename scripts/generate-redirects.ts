import { readdirSync } from 'node:fs'
import { parseModule, writeFile } from 'magicast'

async function main() {
  // Read files from ./sh directory
  const files = readdirSync('./sh')

  // Generate redirects
  const redirects: Record<string, { redirect: { to: string, statusCode: number } }> = {}
  for (const file of files) {
    const name = file.replace('.sh', '')
    redirects[`/${name}`] = {
      redirect: {
        to: `https://raw.githubusercontent.com/barbapapazes/setup.esteban-soubiran.site/main/sh/${file}`,
        statusCode: 302, // Temporary redirect
      },
    }
  }

  // Write redirects to config/redirects.ts
  const redirectsFile = parseModule(`/** Generated using a ./scripts/generate-redirects. */
export default { }`)

  redirectsFile.exports.default = redirects

  await writeFile(redirectsFile, './config/redirects.ts')
}

main().catch(console.error)
