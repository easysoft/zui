import type {DTable} from '../main-react';

export type ClassNameLike = import('@zui/core').ClassNameLike;

export type CustomRenderResultItem = import('@zui/core').CustomRenderResultItem;
export type CustomRenderResult<T extends Array<unknown> = unknown[], THIS = DTable> = import('@zui/core').CustomRenderResult<T, THIS>;
export type CustomRenderResultGenerator<T extends Array<unknown> = unknown[], THIS = DTable> = import('@zui/core').CustomRenderResultGenerator<T, THIS>;
export type CustomRenderResultList<T extends Array<unknown> = unknown[], THIS = DTable> = import('@zui/core').CustomRenderResultList<T, THIS>;
