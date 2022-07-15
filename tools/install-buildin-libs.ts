#!/usr/bin/env node
import 'zx/globals';
import {getBuildInLibs} from './buildin-libs.js';

const buildInLibs = await getBuildInLibs();
const libs = [...buildInLibs.entries()].map(([name, version]) => `${name}@${version}`);
await $`pnpm i -w -S ${libs}`;
