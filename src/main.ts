import './global.css';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1 class="text-3xl font-bold underline text-blue-500">Hello ZUI!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
