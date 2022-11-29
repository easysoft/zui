# 导航生成器

## 基本用法

<Example>
  <div id="nav1" class="w-full"></div>
</Example>

<script>
export default {
    mounted() {
        onZUIReady(() => {
            const nav = new zui.Nav('#nav1', {
                items: [
                    {text: '首页', icon: 'icon-home', active: true},
                    {text: '动态'},
                    {text: '论坛'},
                    {type: 'divider'},
                    {text: '博客', icon: 'icon-rss'},
                    {text: '关注我们', icon: 'icon-group'},
                ],
                onClickItem: (info) => {
                    console.log('> nav.onClickItem', info);
                },
            });
        })
    }
}
</script>
