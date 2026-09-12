export * from './types';
export * from './vanilla';
export {VirtualizerController, createVirtualizer, createWindowVirtualizer} from './virtualizer';
export type {ElementVirtualizerOptions, WindowVirtualizerOptions} from './virtualizer';
export {Virtualizer, defaultRangeExtractor} from '@tanstack/virtual-core';
import './component/share';
