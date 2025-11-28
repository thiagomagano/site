import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		alias: {
			$data: './src/data'
		},
		adapter: adapter()
	}
};

export default config;
