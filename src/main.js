import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world 朝水！'
	}
});

export default app;