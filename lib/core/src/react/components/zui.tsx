import {h, createRef, Component, ComponentType, ClassAttributes} from 'preact';
import {create, Component as ZUIVanillaComponent} from '../../component';

/**
 * ZUI组件选项类型定义
 */
type ZUIComponentOptions = {
    /** 要使用的ZUI组件名称 */
    $use: string;
    /** 渲染的HTML标签名 */
    $tagName?: string;
    /** 组件配置选项 */
    $options?: Record<string, unknown>;
    /** 根元素的属性 */
    $rootAttrs?: Record<string, unknown>;
    /** 触发强制更新组件 */
    $forceUpdate?: unknown;
    /** 其他任意属性 */
    [key: string] : unknown;
};

/**
 * ZUI组件包装器
 *
 * 用于在React/Preact环境中动态调用ZUI原生组件。
 * 通过$use属性指定要使用的ZUI组件,并支持传入组件配置选项。
 *
 * @example
 * ```tsx
 * // 使用 ColorPicker 组件
 * <ZUI
 *   $use="colorPicker"
 *   value: '#ff0000'
 *   onChange: (color) => console.log('Selected color:', color)
 * />
 * ```
 */
export class ZUI extends Component<ZUIComponentOptions> {
    /** ZUI组件实例的引用 */
    protected _ref = createRef<ZUIVanillaComponent>();

    /** DOM元素的引用 */
    protected _eleRef = createRef<HTMLDivElement>();

    /** 获取ZUI组件实例 */
    get $() {
        return this._ref.current;
    }

    /**
     * 初始化ZUI组件
     * 销毁已存在的组件实例,并创建新的组件实例
     */
    initZuiComponent() {
        if (this._ref.current) {
            this._ref.current.destroy();
        }
        const {
            $tagName,
            $rootAttrs,
            $forceUpdate,
            $use,
            $options,
            ...rest
        } = this.props;
        this._ref.current = create($use, this._eleRef.current!, {
            ...$options,
            ...rest,
        });
    }

    /**
     * 更新ZUI组件
     * 使用新的props重新渲染组件
     */
    updateZuiComponent() {
        const {
            $tagName,
            $rootAttrs,
            $forceUpdate,
            $use,
            $options,
            ...rest
        } = this.props;
        this._ref.current?.render({
            ...$options,
            ...rest,
        });
    }

    /**
     * 组件挂载后初始化ZUI组件
     */
    componentDidMount(): void {
        this.initZuiComponent();
    }

    /**
     * 组件更新时处理ZUI组件的更新
     * 如果组件类型或标签发生变化则重新初始化,否则更新现有组件
     */
    componentDidUpdate(previousProps: Readonly<ZUIComponentOptions>): void {
        if (previousProps.$forceUpdate !== this.props.$forceUpdate || previousProps.$use !== this.props.$use || previousProps.$tagName !== this.props.$tagName) {
            this.initZuiComponent();
        } else {
            this.updateZuiComponent();
        }
    }

    /**
     * 渲染组件
     * 默认渲染为div元素,可通过$tagName属性指定其他标签
     */
    render(props: ZUIComponentOptions) {
        const {
            $tagName = 'div',
            $rootAttrs,
        } = props;

        return h($tagName as unknown as ComponentType, {
            ref: this._eleRef,
            ...$rootAttrs,
        } as ClassAttributes<HTMLInputElement>);
    }
}
