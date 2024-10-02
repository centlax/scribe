import MagicString from 'magic-string';
import { marked } from 'marked';

export function preprocessScribe() {
	return {
		name: 'Scribe Preprocess',
		/**
		 * @param {object} options
		 * @param {string} options.content
		 * @param {string} options.filename
		 */
		markup: async ({ content, filename }) => {
			const markupString = new MagicString(content);

			// Check if the file is a Markdown file
			if (filename && filename.endsWith('.md')) {
				// Parse the markdown content into HTML using `marked`
				const htmlContent = await marked.parse(content); // Ensure to await any potential promise
				// Replace the original content with the parsed markdown
				markupString.overwrite(0, content.length, htmlContent);
			}

			return {
				code: markupString.toString(),
				map: markupString.generateMap({ hires: true })
			};
		}
	};
}
