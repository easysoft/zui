export type CssContributeType = 'class' | 'var';

export interface CssContributes {
    css: CssContributeType[];
}

export type JsContributeType = 'class' | 'var' | 'method' | 'module' | 'component';

export interface JsContributes {
    js: JsContributeType[];
}

export type ConfigContributeType = 'tailwind';

export interface ConfigContributes {
    config: ConfigContributeType[];
}

export type Contributes = CssContributes & JsContributes & ConfigContributes;
