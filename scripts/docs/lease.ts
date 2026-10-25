import Path from 'node:path';
import {acquireBuildLock} from '../build/lifecycle';
import {canonical} from '../build/paths';

/** A coordination key keeps docs writers exclusive without re-locking the nested bundle output. */
export async function acquireDocsLease(root = process.cwd()) {
    return acquireBuildLock([{path: await canonical(Path.join(root, 'docs/.zui-docs-writer')), directory: false}]);
}
