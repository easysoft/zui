import type {DTable} from '../main-react';

export type ClassNameLike = import('@zui/core').ClassNameLike;

export type CustomRenderResultItem = import('@zui/com-helpers/src/helpers/custom-render').CustomRenderResultItem;
export type CustomRenderResult<T extends Array<unknown> = unknown[], THIS = DTable> = import('@zui/com-helpers/src/helpers/custom-render').CustomRenderResult<T, THIS>;
export type CustomRenderResultGenerator<T extends Array<unknown> = unknown[], THIS = DTable> = import('@zui/com-helpers/src/helpers/custom-render').CustomRenderResultGenerator<T, THIS>;
export type CustomRenderResultList<T extends Array<unknown> = unknown[], THIS = DTable> = import('@zui/com-helpers/src/helpers/custom-render').CustomRenderResultList<T, THIS>;
