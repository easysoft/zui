# Integration and discovery

## Identify the installed surface

Inspect all of the following that exist:

- `package.json`, workspace manifests, and the active lockfile;
- `node_modules/zui/package.json` and `node_modules/@zui/*/package.json`;
- each relevant package's `exports`, `main`, `module`, `browser`, and declaration files;
- current JS/TS imports, CSS imports, HTML `<script>` and `<link>` tags, and any global `zui` access;
- bundler aliases, externals, optimize/dependency settings, SSR rules, and custom ZUI build manifests.

Use the resolved installed version over a semver range in the manifest. When dependencies are not installed, use the lockfile resolution if available and avoid claiming that an export exists.

## Keep delivery modes distinct

### Full bundle

A ZUI 3 distribution commonly contains `zui.css`, a UMD `zui.js`, and `zui.esm.js`. The UMD build exposes public members through global `zui`. An npm full bundle commonly pairs the root JS entry with a CSS subpath.

After verifying the installed exports, a module-bundled application may use a shape such as:

```js
import {Messager} from 'zui';
import 'zui/css';
```

Do not change this to a default import unless the installed module actually declares one.

### Scoped library packages

ZUI source libraries can expose entries such as package root, `./css`, and `./react`, but entries differ by package and release. Only use a scoped form after confirming the package is declared, installed, and exported:

```js
import {Menu} from '@zui/menu';
import '@zui/menu/css';
```

Do not assume `zui/<name>`, `zui/lib/<name>`, and `@zui/<name>` are interchangeable. Package export maps decide which one is valid.

### CDN or downloaded files

Load the version-matched stylesheet before rendering styled markup and load the JS before calling `zui.*`. Pin an explicit version in production. Verify URLs against the official release or registry rather than copying a moving `latest` URL. Respect the project's CSP, SRI, nonce, and self-hosting policy.

### Custom builds

A custom bundle may intentionally omit components. Check its build configuration or actual exports before diagnosing a missing class as a loading-order problem. Add a library to the custom build only when the user has authorized changing that build.

## Handle versions conservatively

- Treat `zui@1.x` and ZUI 3 as different frameworks with different markup and JS APIs.
- Do not infer the major version from class names such as `.btn` alone.
- When application code, documentation, and declarations disagree, prefer runtime artifacts for the installed version and mention the mismatch.
- Do not upgrade a major or alter a lockfile merely to make an example work.

## Add or change dependencies

Use the repository's package manager and workspace policy. Determine whether the application expects the full bundle or scoped packages before installing anything. After a dependency change, inspect the resulting resolved version and export map, then run the normal typecheck and production build.

Never add Preact or Cash merely because ZUI uses them internally. Add a direct dependency only when application code imports that package or the verified ZUI entry requires the consumer to provide it.
