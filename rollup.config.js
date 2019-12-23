import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import analyze from 'rollup-plugin-analyzer';

const production = process.env.BUILD === 'production';

export default {
    input: 'index.js',
    output: {
        file: 'pb-components.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        resolve(),
        production && terser(),
        analyze({
            summaryOnly: true
        })
    ]
}