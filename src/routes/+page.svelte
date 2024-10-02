<script lang="ts">
	import { codeToHtml } from 'shiki';

	const code = `
	.bg-red-500 { 
		color: red;
	}
	
	`; // input code
	let highlightedCode: string | null = null;

	// Function to generate HTML for the code
	async function getHighlightedCode() {
		highlightedCode = await codeToHtml(code, {
			lang: 'css',
			theme: 'material-theme'
		});
	}

	// Call the function when the component is mounted
	getHighlightedCode();
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p class="bg-red-50">
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<!-- Display the highlighted code once it is ready -->

<pre>{@html highlightedCode}</pre>

