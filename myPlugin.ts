import { plugin, type BunPlugin } from 'bun'

plugin({
    name: 'mjs loader',
    async setup(build) {
        const { readFileSync } = await import('fs')

        build.onLoad({ filter: /\.(mts)$/ }, ({ path }) => {
            const file = readFileSync(path, 'utf8')

            // Replace .mjs with .mts
            return {
                contents: file.replaceAll('.mjs', '.mts'),
            }
        })
    },
})
