import modify from 'rollup-plugin-modify';

const codeMirrorPluginToEsm = modify({
    '/^([\\s\\S]*?)function\\(CodeMirror\\)/m': "export default function(CodeMirror)",
    '/\\}\\);\\s*?$/': "}"
})

export default [
    {
        input: 'node_modules/codemirror/mode/xquery/xquery.js',
        output: { file: 'assets/codemirror/mode/xquery/xquery.js' },
        plugins: [codeMirrorPluginToEsm]
    }
    ,
    {
        input: 'node_modules/codemirror/mode/css/css.js',
        output: { file: 'assets/codemirror/mode/css/css.js' },
        plugins: [codeMirrorPluginToEsm]
    },
    {
        input: 'node_modules/codemirror/addon/display/placeholder.js',
        output: { file: 'assets/codemirror/addon/display/placeholder.js' },
        plugins: [codeMirrorPluginToEsm]
    },
    {
        input: 'node_modules/codemirror/addon/edit/matchbrackets.js',
        output: { file: 'assets/codemirror/addon/edit/matchbrackets.js' },
        plugins: [codeMirrorPluginToEsm]
    },
    {
        input: 'node_modules/codemirror/addon/lint/lint.js',
        output: { file: 'assets/codemirror/addon/lint/lint.js' },
        plugins: [codeMirrorPluginToEsm]
    }
];