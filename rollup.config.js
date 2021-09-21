import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import serve from 'rollup-plugin-serve'
import vue from 'rollup-plugin-vue'
import replace from '@rollup/plugin-replace';
import { rollupMagebook, encodeChapter, textToHtml, htmlToText } from 'magebook';


const safeTags = [
  '<i>', '</i>', 
  '<b>', '</b>',
  '<ol>', '</ol>', '<ul>', '</ul>',
]

// Set custom magebook parser
const magebook = rollupMagebook({
  transform: (key, chapter, book) => ({
    title: chapter.title,
    text: encodeChapter(chapter.text, {
      html:      text => {
        const trimmed = text.trim()
        if(safeTags.includes(trimmed)){
          return text
        }
        if(trimmed.startsWith('<li>') && trimmed.endsWith('</li>')){
          return trimmed
        }
        return textToHtml(text)
      },
      paragraph: text => `${text}<br>`,
      strong:    text => `<b>${text}</b>`,
      em:        text => `<i>${text}</i>`,
      codespan:  text => htmlToText(text),
      code: (code)    => code,
      link: (href,i, text) => `<mage-link to="${href.replace('#', '')}">` +
          (text || book.chapters[href.replace('#', '')].title || href.replace('#', '')) + 
        `</mage-link>`    
    }), 
  })
})                   




const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'app-web/build/bundle.js'
	},
  
	plugins: [
    magebook,

    alias({
      entries: [
        { find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js'  },
      ]
    }),
    resolve({ browser: true, }),
    vue({
      css: false,
      transformAssetUrls: false,
    }),
		css({ output: 'bundle.css' }),
    replace({
			preventAssignment: true,
      '__VUE_OPTIONS_API__': true,
      '__VUE_PROD_DEVTOOLS__': true,
			'process.env.NODE_ENV' : production ? '"production"' : '"development"'
		}),
		commonjs(),

		!production && serve({
			host: '0.0.0.0',
			port: '3000',
			contentBase: ['app-web']

		}),
		!production && livereload('app'),

		// Minify if production
		production && terser()
	],
	watch: {
		clearScreen: false
	},
};
