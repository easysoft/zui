export default {
    mounted() {
        const kanbanOptions = {
            editLinks: true,
            heading: {
                title: 'Kanban',
                actions: [
                    {icon: 'cog text-gray', title: '设置'},
                    {
                        type: 'dropdown',
                        icon: 'ellipsis-v text-gray',
                        caret: false,
                        placement: 'bottom-end',
                        items: [ // 下拉菜单内容
                            {text: '编辑', icon: 'edit'},
                        ],
                    },
                ],
            },
            data: {
                'cols': [
                    {
                        'name': 'counter-force',
                        'title': 'Counter-force',
                    },
                    {
                        'name': 'depth',
                        'title': 'Depth',
                    },
                    {
                        'name': 'poor',
                        'title': 'Poor',
                    },
                    {
                        'name': 'pupil',
                        'title': 'Pupil',
                    },
                    {
                        'name': 'kiss',
                        'title': 'Kiss',
                    },
                    {
                        'name': 'ratio',
                        'title': 'Ratio',
                    },
                    {
                        'name': 'snowflake',
                        'title': 'Snowflake',
                    },
                    {
                        'name': 'exchange',
                        'title': 'Exchange',
                    },
                ],
                'lanes': [
                    {
                        'name': 'personal',
                        'title': 'Personal',
                        'order': 0,
                    },
                ],
                'items': {
                    'personal': {
                        'counter-force': [
                            {
                                'id': 3,
                                'title': 'Corrupti explicabo quos quos libero non eum officiis.',
                                'order': -1,
                            },
                            {
                                'id': 4,
                                'title': 'Quibusdam odit exercitationem cumque quam optio voluptatum quae.',
                                'order': 0,
                            },
                            {
                                'id': 5,
                                'title': 'Consectetur temporibus laudantium incidunt.',
                                'order': 1,
                            },
                            {
                                'id': 6,
                                'title': 'Quam enim modi sint excepturi rem perspiciatis dignissimos.',
                                'order': 2,
                            },
                        ],
                        'depth': [
                            {
                                'id': 7,
                                'title': 'Eveniet fuga iure in fugiat voluptatibus quidem reprehenderit molestias cum.',
                                'order': -1,
                            },
                            {
                                'id': 8,
                                'title': 'Cupiditate assumenda aliquid accusamus delectus.',
                                'order': 0,
                            },
                            {
                                'id': 9,
                                'title': 'Reiciendis dolores officiis modi alias corrupti exercitationem minus ab tenetur.',
                                'order': 1,
                            },
                            {
                                'id': 10,
                                'title': 'Tenetur sint nam neque.',
                                'order': 2,
                            },
                            {
                                'id': 11,
                                'title': 'Dolor magni quas repellendus eaque.',
                                'order': 3,
                            },
                            {
                                'id': 12,
                                'title': 'Consequuntur incidunt praesentium maiores quia iste dolor.',
                                'order': 4,
                            },
                        ],
                        'poor': [
                            {
                                'id': 13,
                                'title': 'Quae ea similique dicta vero itaque laborum ducimus aliquam.',
                                'order': -1,
                            },
                            {
                                'id': 14,
                                'title': 'Fuga eius mollitia odit.',
                                'order': 0,
                            },
                            {
                                'id': 15,
                                'title': 'Temporibus nostrum assumenda.',
                                'order': 1,
                            },
                            {
                                'id': 16,
                                'title': 'Aut magnam nam.',
                                'order': 2,
                            },
                            {
                                'id': 17,
                                'title': 'Ab soluta maxime alias nisi rem consequatur architecto voluptates perspiciatis.',
                                'order': 3,
                            },
                            {
                                'id': 18,
                                'title': 'Modi quaerat nobis voluptatem nobis quas error occaecati debitis corporis.',
                                'order': 4,
                            },
                            {
                                'id': 19,
                                'title': 'Consequuntur sint magni.',
                                'order': 5,
                            },
                            {
                                'id': 20,
                                'title': 'Inventore atque aut tenetur facere odit.',
                                'order': 6,
                            },
                            {
                                'id': 21,
                                'title': 'Neque recusandae sint quas.',
                                'order': 7,
                            },
                        ],
                        'pupil': [
                            {
                                'id': 22,
                                'title': 'Minus et facere repudiandae sequi eos vitae sapiente tempora sunt.',
                                'order': -1,
                            },
                            {
                                'id': 23,
                                'title': 'Enim ab laboriosam error minus molestiae.',
                                'order': 0,
                            },
                            {
                                'id': 24,
                                'title': 'Sapiente repudiandae aliquid laudantium voluptatibus.',
                                'order': 1,
                            },
                            {
                                'id': 25,
                                'title': 'Debitis facilis reprehenderit assumenda reiciendis dignissimos laborum.',
                                'order': 2,
                            },
                            {
                                'id': 26,
                                'title': 'Provident asperiores nostrum possimus quos.',
                                'order': 3,
                            },
                            {
                                'id': 27,
                                'title': 'Fuga quod vel occaecati eos autem dolore.',
                                'order': 4,
                            },
                            {
                                'id': 28,
                                'title': 'Commodi magnam nihil nisi laborum laboriosam quo a.',
                                'order': 5,
                            },
                            {
                                'id': 29,
                                'title': 'Vel optio corrupti enim ut illum ullam.',
                                'order': 6,
                            },
                            {
                                'id': 30,
                                'title': 'Eos commodi earum.',
                                'order': 7,
                            },
                            {
                                'id': 31,
                                'title': 'Nobis qui maiores aspernatur beatae est molestias totam nostrum consequuntur.',
                                'order': 8,
                            },
                        ],
                        'kiss': [
                            {
                                'id': 32,
                                'title': 'Accusamus soluta dignissimos.',
                                'order': -1,
                            },
                        ],
                        'ratio': [
                            {
                                'id': 33,
                                'title': 'Neque dignissimos minima facere perspiciatis officia dolore consequuntur excepturi nesciunt.',
                                'order': -1,
                            },
                            {
                                'id': 34,
                                'title': 'Occaecati aliquam enim incidunt quibusdam minima iusto nostrum deserunt.',
                                'order': 0,
                            },
                        ],
                        'snowflake': [
                            {
                                'id': 35,
                                'title': 'Nesciunt rem consequatur amet id maxime.',
                                'order': -1,
                            },
                            {
                                'id': 36,
                                'title': 'Cum minima sunt adipisci corrupti.',
                                'order': 0,
                            },
                            {
                                'id': 37,
                                'title': 'Excepturi blanditiis porro earum aliquam temporibus nesciunt.',
                                'order': 1,
                            },
                        ],
                        'exchange': [
                            {
                                'id': 38,
                                'title': 'Aut fugiat impedit consequuntur eum consequuntur perspiciatis velit voluptatum.',
                                'order': -1,
                            },
                            {
                                'id': 39,
                                'title': 'Impedit iste quo eum libero ullam animi sed sint dolores.',
                                'order': 0,
                            },
                            {
                                'id': 40,
                                'title': 'Ratione temporibus aut unde nihil.',
                                'order': 1,
                            },
                        ],
                    },
                },
                'links': [
                    {from: '5', to: '12'},
                    {from: '16', to: '20'},
                    {from: '16', to: '23'},
                    {from: '24', to: '56'},
                    {from: '6', to: '56'},
                ],
            },
            colProps: {
                /* 通过 actions 自定义列操作按钮（actions 还可以为一个回调函数动态返回操作按钮设置）。 */
                actions: () => {
                    return [{
                        icon: 'check-plus text-primary',
                        onClick: () => console.log('Click add'),
                    }, {
                        type: 'dropdown',
                        icon: 'ellipsis-v text-primary',
                        caret: false,
                        items: [ // 下拉菜单内容
                            {text: '编辑', icon: 'edit'},
                        ],
                    }];
                },
            },
            itemRender: (info) => {
                /* 自定义渲染卡片，通过 {html: ...} 返回卡片 HTML内容。 */
                return {className: 'card kanban-item card-list-item item', html: `<div class="card-heading"><span class="card-title">${info.item.title}</span></div>`};
            },
            getCol(col) {
                /* 通过 content 属性自定义列额外内容。 */
                return window.$.extend({
                    contentClass: 'bg-surface shadow-sm',
                    content: function (info) {
                        const id = `content-${info.lane}-${info.name}`;
                        const toggleID = `toggle-${info.lane}-${info.name}`;
                        return {attrs: {id: id, className: 'relative p-2'}, html: [
                            '<div class="row border mb-2">',
                            '   <div class="cell w-1/3 col items-center justify-center">',
                            '       <div>120 <span class="text-sm text-gray">sp</span></div>',
                            '       <div>工作量</div>',
                            '   </div>',
                            '   <div class="cell w-1/3 border-l col items-center justify-center">',
                            '       <div>120 <span class="text-sm text-gray">sp</span></div>',
                            '       <div>工作量</div>',
                            '   </div>',
                            '   <div class="cell w-1/3 border-l col items-center justify-center">',
                            '       <div>120 <span class="text-sm text-gray">sp</span></div>',
                            '       <div>工作量</div>',
                            '   </div>',
                            '</div>',
                            `<style>#${id} .as-expand-content {display: none}#${toggleID}:checked + .as-expand-content {display: block}#${toggleID}:checked + .as-expand-content + .as-collapse-content {visibility: hidden}#${id} .as-expand-content::before {content:' ';display:block;position:absolute;left:0;right:0;bottom:-10px;height:10px;background-image:linear-gradient(180deg,rgba(0,0,0,.05),transparent),linear-gradient(180deg,rgba(0,0,0,.05),transparent 50%)}</style>`,
                            `<input type="checkbox" class="hidden" id="${toggleID}" />`,
                            '<div class="as-expand-content bg-surface px-3 py-1 absolute left-0 right-0 top-10">',
                            '   <div>用户需求</div>',
                            '   <div>描述文本描述文本描述文本描述文本描述文本描述文本</div>',
                            '   <hr class="my-2">',
                            '   <div>用户需求</div>',
                            '   <div>描述文本描述文本描述文本描述文本描述文本描述文本</div>',
                            `   <div class="center"><label for="${toggleID}" class="btn light bg-opacity-50 ring-0 size-xs w-7 text-gray rounded"><i class="icon icon-chevron-up scale-75"></i></label></div>`,
                            '</div>',
                            `<div class="as-collapse-content center"><label for="${toggleID}" class="btn light bg-opacity-50 ring-0 size-xs w-7 text-gray rounded"><i class="icon icon-chevron-down scale-75"></i></label></div>`,
                        ].join('')};
                    },
                }, col);
            },
        };
        const kanban2Options = {
            heading: {
                title: {html: '<span>设置区域</span> <i class="icon icon-chevron-up"></i>'},
            },
            data: {
                'cols': [
                    {
                        'name': 'nature',
                        'title': 'Nature',
                        'order': 0,
                    },
                    {
                        'name': 'deodorant',
                        'title': 'Deodorant',
                        'order': 1,
                    },
                    {
                        'name': 'custard',
                        'title': 'Custard',
                        'order': 2,
                    },
                    {
                        'name': 'leash',
                        'title': 'Leash',
                        'order': 3,
                    },
                    {
                        'name': 'dynamite',
                        'title': 'Dynamite',
                        'order': 4,
                    },
                    {
                        'name': 'finding',
                        'title': 'Finding',
                        'order': 5,
                    },
                    {
                        'name': 'stain',
                        'title': 'Stain',
                        'order': 6,
                    },
                    {
                        'name': 'count',
                        'title': 'Count',
                        'order': 7,
                    },
                    {
                        'name': 'power',
                        'title': 'Power',
                        'order': 8,
                    },
                    {
                        'name': 'detention',
                        'title': 'Detention',
                        'order': 9,
                    },
                ],
                'lanes': [
                    {
                        'name': 'overlooked',
                        'title': 'Overlooked',
                        'order': 0,
                    },
                    {
                        'name': 'luminous',
                        'title': 'Luminous',
                        'order': 1,
                    },
                    {
                        'name': 'soggy',
                        'title': 'Soggy',
                        'order': 2,
                    },
                ],
                'items': {
                    'overlooked': {
                        'nature': [
                            {
                                'id': 3,
                                'title': 'Voluptatibus natus minima officia quo id illo.',
                                'order': -1,
                            },
                        ],
                        'deodorant': [
                            {
                                'id': 4,
                                'title': 'Laudantium alias pariatur neque doloremque in unde ullam doloribus.',
                                'order': -1,
                            },
                            {
                                'id': 5,
                                'title': 'Neque occaecati autem eaque.',
                                'order': 0,
                            },
                            {
                                'id': 6,
                                'title': 'Sed nemo aut molestiae delectus aliquam exercitationem.',
                                'order': 1,
                            },
                            {
                                'id': 7,
                                'title': 'Explicabo maxime debitis modi atque nostrum exercitationem reprehenderit.',
                                'order': 2,
                            },
                            {
                                'id': 8,
                                'title': 'Enim natus quo fugiat ullam pariatur maxime.',
                                'order': 3,
                            },
                            {
                                'id': 9,
                                'title': 'Labore nisi temporibus fuga numquam at.',
                                'order': 4,
                            },
                            {
                                'id': 10,
                                'title': 'Sequi explicabo dolorem mollitia voluptas aut debitis id illo commodi.',
                                'order': 5,
                            },
                        ],
                        'custard': [],
                        'leash': [
                            {
                                'id': 11,
                                'title': 'Totam nemo possimus ad.',
                                'order': -1,
                            },
                            {
                                'id': 12,
                                'title': 'Et placeat quam voluptatum totam.',
                                'order': 0,
                            },
                        ],
                        'dynamite': [
                            {
                                'id': 13,
                                'title': 'Amet blanditiis neque doloribus molestias distinctio distinctio.',
                                'order': -1,
                            },
                            {
                                'id': 14,
                                'title': 'Voluptate magnam sint.',
                                'order': 0,
                            },
                            {
                                'id': 15,
                                'title': 'Cupiditate odit maxime vel esse praesentium occaecati sed placeat veritatis.',
                                'order': 1,
                            },
                            {
                                'id': 16,
                                'title': 'Eaque dicta omnis sunt.',
                                'order': 2,
                            },
                            {
                                'id': 17,
                                'title': 'Quo et veniam soluta fugiat vero.',
                                'order': 3,
                            },
                            {
                                'id': 18,
                                'title': 'Enim nostrum voluptatem eveniet quis harum rerum laborum similique.',
                                'order': 4,
                            },
                            {
                                'id': 19,
                                'title': 'Distinctio similique tempore aut.',
                                'order': 5,
                            },
                            {
                                'id': 20,
                                'title': 'Quod maiores dolorem non nulla adipisci adipisci ut aspernatur.',
                                'order': 6,
                            },
                        ],
                        'finding': [
                            {
                                'id': 21,
                                'title': 'Beatae ea atque sapiente similique impedit voluptate possimus aut.',
                                'order': -1,
                            },
                            {
                                'id': 22,
                                'title': 'Harum tempore provident quidem repellat libero asperiores suscipit.',
                                'order': 0,
                            },
                            {
                                'id': 23,
                                'title': 'Totam consectetur nisi tempora sint illo earum eius.',
                                'order': 1,
                            },
                            {
                                'id': 24,
                                'title': 'Ea ab ullam aliquam laudantium quam.',
                                'order': 2,
                            },
                        ],
                        'stain': [
                            {
                                'id': 25,
                                'title': 'Eius repellat provident unde.',
                                'order': -1,
                            },
                            {
                                'id': 26,
                                'title': 'Ipsum eum nesciunt.',
                                'order': 0,
                            },
                            {
                                'id': 27,
                                'title': 'Explicabo dolorem cum facere temporibus animi quis nihil.',
                                'order': 1,
                            },
                            {
                                'id': 28,
                                'title': 'Sequi nostrum veritatis officia suscipit maxime accusamus eius.',
                                'order': 2,
                            },
                            {
                                'id': 29,
                                'title': 'Tempore molestiae quia doloremque ipsa deserunt porro impedit quidem odio.',
                                'order': 3,
                            },
                            {
                                'id': 30,
                                'title': 'Odio dolorum dicta eos commodi modi quaerat fugit alias.',
                                'order': 4,
                            },
                        ],
                        'count': [
                            {
                                'id': 31,
                                'title': 'Quibusdam ipsum quas nisi amet dignissimos saepe est.',
                                'order': -1,
                            },
                            {
                                'id': 32,
                                'title': 'Possimus numquam nisi aut ab tempore unde voluptatibus.',
                                'order': 0,
                            },
                        ],
                        'power': [
                            {
                                'id': 33,
                                'title': 'Officia voluptatibus vel.',
                                'order': -1,
                            },
                        ],
                        'detention': [
                            {
                                'id': 34,
                                'title': 'Amet possimus animi possimus optio cum est id eum.',
                                'order': -1,
                            },
                            {
                                'id': 35,
                                'title': 'Voluptate atque enim sit possimus aut accusamus asperiores provident dolorem.',
                                'order': 0,
                            },
                            {
                                'id': 36,
                                'title': 'Magnam quisquam aliquam impedit.',
                                'order': 1,
                            },
                            {
                                'id': 37,
                                'title': 'Qui dolore illo magni.',
                                'order': 2,
                            },
                            {
                                'id': 38,
                                'title': 'Rerum in officiis officiis asperiores hic delectus perferendis asperiores ad.',
                                'order': 3,
                            },
                        ],
                    },
                    'luminous': {
                        'nature': [
                            {
                                'id': 39,
                                'title': 'Provident nemo doloremque modi non.',
                                'order': -1,
                            },
                        ],
                        'deodorant': [
                            {
                                'id': 40,
                                'title': 'Praesentium enim a qui dolorem totam.',
                                'order': -1,
                            },
                        ],
                        'custard': [
                            {
                                'id': 41,
                                'title': 'Tempore in amet.',
                                'order': -1,
                            },
                            {
                                'id': 42,
                                'title': 'Accusamus quam tenetur laborum id minus eveniet.',
                                'order': 0,
                            },
                            {
                                'id': 43,
                                'title': 'Commodi ut dolores repellendus aperiam harum.',
                                'order': 1,
                            },
                        ],
                        'leash': [
                            {
                                'id': 44,
                                'title': 'Harum et sed dolorem vel ratione.',
                                'order': -1,
                            },
                            {
                                'id': 45,
                                'title': 'Nesciunt accusantium velit dolorum.',
                                'order': 0,
                            },
                            {
                                'id': 46,
                                'title': 'Modi alias sed repudiandae a quibusdam aspernatur veritatis.',
                                'order': 1,
                            },
                            {
                                'id': 47,
                                'title': 'Recusandae officia beatae eveniet occaecati tenetur in rem repudiandae.',
                                'order': 2,
                            },
                            {
                                'id': 48,
                                'title': 'Et blanditiis veniam eveniet maiores possimus neque libero tenetur explicabo.',
                                'order': 3,
                            },
                            {
                                'id': 49,
                                'title': 'Sint excepturi optio veritatis vero ad.',
                                'order': 4,
                            },
                        ],
                        'dynamite': [
                            {
                                'id': 50,
                                'title': 'Amet nemo esse necessitatibus aperiam quasi unde ratione vero iusto.',
                                'order': -1,
                            },
                            {
                                'id': 51,
                                'title': 'Odio tenetur repudiandae sint.',
                                'order': 0,
                            },
                        ],
                        'finding': [
                            {
                                'id': 52,
                                'title': 'Repudiandae culpa culpa exercitationem.',
                                'order': -1,
                            },
                            {
                                'id': 53,
                                'title': 'Nulla explicabo similique nisi.',
                                'order': 0,
                            },
                            {
                                'id': 54,
                                'title': 'Eveniet facilis sunt quaerat molestias fugit non eius repellat pariatur.',
                                'order': 1,
                            },
                            {
                                'id': 55,
                                'title': 'Quo vero praesentium recusandae et.',
                                'order': 2,
                            },
                            {
                                'id': 56,
                                'title': 'Animi atque omnis ducimus delectus repellendus mollitia.',
                                'order': 3,
                            },
                            {
                                'id': 57,
                                'title': 'Ullam natus magni qui distinctio quidem ducimus.',
                                'order': 4,
                            },
                            {
                                'id': 58,
                                'title': 'Expedita error natus occaecati laborum.',
                                'order': 5,
                            },
                            {
                                'id': 59,
                                'title': 'Occaecati officiis at hic vel vitae.',
                                'order': 6,
                            },
                            {
                                'id': 60,
                                'title': 'Deserunt sapiente minima cupiditate corporis nobis pariatur dolor consequuntur odit.',
                                'order': 7,
                            },
                            {
                                'id': 61,
                                'title': 'Animi praesentium itaque.',
                                'order': 8,
                            },
                        ],
                        'stain': [
                            {
                                'id': 62,
                                'title': 'Numquam reiciendis recusandae itaque quaerat itaque libero.',
                                'order': -1,
                            },
                            {
                                'id': 63,
                                'title': 'Ut neque eaque iusto.',
                                'order': 0,
                            },
                            {
                                'id': 64,
                                'title': 'Sequi optio nam ducimus quam.',
                                'order': 1,
                            },
                            {
                                'id': 65,
                                'title': 'Nesciunt doloremque quam.',
                                'order': 2,
                            },
                            {
                                'id': 66,
                                'title': 'Magnam blanditiis repellendus reprehenderit dolor.',
                                'order': 3,
                            },
                            {
                                'id': 67,
                                'title': 'Eum aut facere officiis eos quos voluptates itaque at numquam.',
                                'order': 4,
                            },
                            {
                                'id': 68,
                                'title': 'Et molestias ex rem dolore fuga reprehenderit dicta.',
                                'order': 5,
                            },
                            {
                                'id': 69,
                                'title': 'Iure velit soluta cupiditate assumenda.',
                                'order': 6,
                            },
                            {
                                'id': 70,
                                'title': 'Quaerat eligendi odit quaerat.',
                                'order': 7,
                            },
                            {
                                'id': 71,
                                'title': 'Voluptates quas exercitationem adipisci officiis id quis enim.',
                                'order': 8,
                            },
                        ],
                        'count': [
                            {
                                'id': 72,
                                'title': 'Repellendus natus illo dolorum dolorem.',
                                'order': -1,
                            },
                            {
                                'id': 73,
                                'title': 'Accusantium temporibus tempora omnis quod magni.',
                                'order': 0,
                            },
                        ],
                        'power': [
                            {
                                'id': 74,
                                'title': 'Autem assumenda necessitatibus dolor odio molestias sint sed ab soluta.',
                                'order': -1,
                            },
                            {
                                'id': 75,
                                'title': 'Illum commodi cum illo a explicabo voluptatem ut et.',
                                'order': 0,
                            },
                            {
                                'id': 76,
                                'title': 'Aliquid quaerat cumque sit eaque minus animi quo vitae.',
                                'order': 1,
                            },
                            {
                                'id': 77,
                                'title': 'Ullam veniam suscipit optio provident ipsa maiores porro eum ut.',
                                'order': 2,
                            },
                            {
                                'id': 78,
                                'title': 'Molestias officia accusantium mollitia incidunt natus delectus quae suscipit.',
                                'order': 3,
                            },
                            {
                                'id': 79,
                                'title': 'Alias consectetur molestiae temporibus sint.',
                                'order': 4,
                            },
                        ],
                        'detention': [
                            {
                                'id': 80,
                                'title': 'Magnam laborum tenetur maxime quod sequi fuga doloremque asperiores maiores.',
                                'order': -1,
                            },
                            {
                                'id': 81,
                                'title': 'Amet harum quasi quaerat minima maxime aliquid deleniti commodi repellendus.',
                                'order': 0,
                            },
                            {
                                'id': 82,
                                'title': 'Dicta ipsum consectetur iure.',
                                'order': 1,
                            },
                            {
                                'id': 83,
                                'title': 'Necessitatibus accusantium unde.',
                                'order': 2,
                            },
                        ],
                    },
                    'soggy': {
                        'nature': [
                            {
                                'id': 84,
                                'title': 'Ipsum ratione maxime quos culpa repellendus ullam ex.',
                                'order': -1,
                            },
                            {
                                'id': 85,
                                'title': 'Fugit ipsam fugit similique non delectus voluptatum tempore dignissimos tempora.',
                                'order': 0,
                            },
                            {
                                'id': 86,
                                'title': 'Natus ratione quasi dicta deleniti.',
                                'order': 1,
                            },
                            {
                                'id': 87,
                                'title': 'Deserunt delectus minima est dignissimos et modi numquam itaque quod.',
                                'order': 2,
                            },
                            {
                                'id': 88,
                                'title': 'Autem fuga corporis excepturi possimus quos.',
                                'order': 3,
                            },
                            {
                                'id': 89,
                                'title': 'Odit doloremque vero esse.',
                                'order': 4,
                            },
                            {
                                'id': 90,
                                'title': 'Vel a blanditiis quam in optio ullam aliquam in.',
                                'order': 5,
                            },
                            {
                                'id': 91,
                                'title': 'Atque explicabo voluptate.',
                                'order': 6,
                            },
                            {
                                'id': 92,
                                'title': 'Laudantium dolore in quo.',
                                'order': 7,
                            },
                            {
                                'id': 93,
                                'title': 'Dolorem repellat explicabo placeat mollitia.',
                                'order': 8,
                            },
                        ],
                        'deodorant': [
                            {
                                'id': 94,
                                'title': 'Unde facilis eligendi ducimus nemo.',
                                'order': -1,
                            },
                        ],
                        'custard': [
                            {
                                'id': 95,
                                'title': 'Officia optio harum.',
                                'order': -1,
                            },
                            {
                                'id': 96,
                                'title': 'Eos ducimus autem sequi harum expedita cupiditate.',
                                'order': 0,
                            },
                            {
                                'id': 97,
                                'title': 'Neque aliquam unde aspernatur nihil maxime.',
                                'order': 1,
                            },
                            {
                                'id': 98,
                                'title': 'Nostrum ipsam voluptate accusamus sit dolore numquam eaque ratione consectetur.',
                                'order': 2,
                            },
                            {
                                'id': 99,
                                'title': 'Tenetur ut maiores doloribus illo quia nisi quos.',
                                'order': 3,
                            },
                            {
                                'id': 100,
                                'title': 'Voluptatibus voluptatum in animi doloribus quisquam velit quis autem.',
                                'order': 4,
                            },
                            {
                                'id': 101,
                                'title': 'Ea natus facilis odio soluta dicta.',
                                'order': 5,
                            },
                            {
                                'id': 102,
                                'title': 'Rem debitis error libero amet iure explicabo laboriosam aliquam mollitia.',
                                'order': 6,
                            },
                            {
                                'id': 103,
                                'title': 'Sed voluptates velit quae asperiores.',
                                'order': 7,
                            },
                        ],
                        'leash': [
                            {
                                'id': 104,
                                'title': 'Praesentium in ipsum.',
                                'order': -1,
                            },
                            {
                                'id': 105,
                                'title': 'Neque maxime harum molestiae rem debitis temporibus ipsam ut.',
                                'order': 0,
                            },
                            {
                                'id': 106,
                                'title': 'Quidem facere sequi.',
                                'order': 1,
                            },
                        ],
                        'dynamite': [
                            {
                                'id': 107,
                                'title': 'Perferendis ad sint.',
                                'order': -1,
                            },
                            {
                                'id': 108,
                                'title': 'Provident sequi ipsum libero nemo corporis a.',
                                'order': 0,
                            },
                            {
                                'id': 109,
                                'title': 'Fugit incidunt laborum consectetur nostrum.',
                                'order': 1,
                            },
                            {
                                'id': 110,
                                'title': 'At quidem tempore est veniam enim architecto minima.',
                                'order': 2,
                            },
                            {
                                'id': 111,
                                'title': 'Hic ratione cum rem fuga.',
                                'order': 3,
                            },
                            {
                                'id': 112,
                                'title': 'Modi quo voluptates incidunt et quisquam.',
                                'order': 4,
                            },
                        ],
                        'finding': [
                            {
                                'id': 113,
                                'title': 'Similique fugit dignissimos in ipsa quisquam possimus incidunt reiciendis.',
                                'order': -1,
                            },
                            {
                                'id': 114,
                                'title': 'A libero alias tempora hic amet doloribus cupiditate neque.',
                                'order': 0,
                            },
                            {
                                'id': 115,
                                'title': 'Consectetur modi necessitatibus dolor mollitia aliquid fugit.',
                                'order': 1,
                            },
                            {
                                'id': 116,
                                'title': 'Optio cupiditate quaerat animi harum atque dignissimos.',
                                'order': 2,
                            },
                            {
                                'id': 117,
                                'title': 'Ex cumque natus iste quibusdam qui exercitationem.',
                                'order': 3,
                            },
                            {
                                'id': 118,
                                'title': 'Eaque quam necessitatibus aperiam itaque iusto ullam.',
                                'order': 4,
                            },
                            {
                                'id': 119,
                                'title': 'Quasi dignissimos quaerat quos maiores labore perspiciatis sit laudantium expedita.',
                                'order': 5,
                            },
                            {
                                'id': 120,
                                'title': 'Sunt nisi in quas.',
                                'order': 6,
                            },
                            {
                                'id': 121,
                                'title': 'Saepe voluptate autem nisi molestias in consequuntur accusamus odio assumenda.',
                                'order': 7,
                            },
                            {
                                'id': 122,
                                'title': 'Voluptas repellat aperiam.',
                                'order': 8,
                            },
                        ],
                        'stain': [
                            {
                                'id': 123,
                                'title': 'Voluptas repellat voluptatem eligendi dolorum ullam expedita autem neque.',
                                'order': -1,
                            },
                            {
                                'id': 124,
                                'title': 'Reiciendis quos excepturi.',
                                'order': 0,
                            },
                            {
                                'id': 125,
                                'title': 'Minus et similique voluptates.',
                                'order': 1,
                            },
                            {
                                'id': 126,
                                'title': 'Perspiciatis dignissimos esse incidunt debitis asperiores.',
                                'order': 2,
                            },
                            {
                                'id': 127,
                                'title': 'Repudiandae est rem similique ipsum eius debitis.',
                                'order': 3,
                            },
                            {
                                'id': 128,
                                'title': 'Harum neque quia expedita laboriosam illum modi eum at.',
                                'order': 4,
                            },
                            {
                                'id': 129,
                                'title': 'Suscipit necessitatibus omnis dignissimos magnam eum laudantium dignissimos culpa.',
                                'order': 5,
                            },
                            {
                                'id': 130,
                                'title': 'Omnis earum soluta eius.',
                                'order': 6,
                            },
                            {
                                'id': 131,
                                'title': 'Quas saepe illum architecto eius.',
                                'order': 7,
                            },
                            {
                                'id': 132,
                                'title': 'Quam suscipit rem explicabo sit libero adipisci at adipisci.',
                                'order': 8,
                            },
                        ],
                        'count': [
                            {
                                'id': 133,
                                'title': 'Pariatur exercitationem officiis culpa blanditiis.',
                                'order': -1,
                            },
                            {
                                'id': 134,
                                'title': 'Repudiandae quia debitis vero rem.',
                                'order': 0,
                            },
                            {
                                'id': 135,
                                'title': 'Quaerat nostrum itaque nemo at recusandae exercitationem fugit numquam velit.',
                                'order': 1,
                            },
                            {
                                'id': 136,
                                'title': 'Voluptate nihil voluptates.',
                                'order': 2,
                            },
                            {
                                'id': 137,
                                'title': 'Assumenda voluptas neque neque explicabo nam.',
                                'order': 3,
                            },
                            {
                                'id': 138,
                                'title': 'Quam maxime veniam.',
                                'order': 4,
                            },
                            {
                                'id': 139,
                                'title': 'Est assumenda placeat et fugiat corporis sequi dolor vel beatae.',
                                'order': 5,
                            },
                            {
                                'id': 140,
                                'title': 'Molestiae ipsum ad deleniti sunt veritatis hic vero eligendi.',
                                'order': 6,
                            },
                        ],
                        'power': [
                            {
                                'id': 141,
                                'title': 'Consequatur soluta voluptate ipsam.',
                                'order': -1,
                            },
                            {
                                'id': 142,
                                'title': 'Illo amet adipisci aliquid accusantium.',
                                'order': 0,
                            },
                            {
                                'id': 143,
                                'title': 'Perspiciatis maiores dignissimos quis cupiditate ipsam nobis quibusdam asperiores dolor.',
                                'order': 1,
                            },
                            {
                                'id': 144,
                                'title': 'Ea corporis inventore aliquam commodi ad veritatis esse.',
                                'order': 2,
                            },
                            {
                                'id': 145,
                                'title': 'Amet inventore molestiae voluptates reprehenderit perferendis harum.',
                                'order': 3,
                            },
                            {
                                'id': 146,
                                'title': 'Qui cum nihil voluptates voluptas sequi animi rerum accusamus quisquam.',
                                'order': 4,
                            },
                            {
                                'id': 147,
                                'title': 'Excepturi mollitia eius magnam odio impedit hic.',
                                'order': 5,
                            },
                            {
                                'id': 148,
                                'title': 'Veritatis tenetur ullam possimus inventore amet dignissimos.',
                                'order': 6,
                            },
                            {
                                'id': 149,
                                'title': 'Delectus fugit natus quis veritatis quam.',
                                'order': 7,
                            },
                        ],
                        'detention': [
                            {
                                'id': 150,
                                'title': 'Dolorum assumenda saepe minus quis ducimus.',
                                'order': -1,
                            },
                            {
                                'id': 151,
                                'title': 'Dicta doloribus maiores sint unde praesentium nulla debitis aut corporis.',
                                'order': 0,
                            },
                            {
                                'id': 152,
                                'title': 'Quod blanditiis quis autem ullam culpa praesentium dolorem quasi adipisci.',
                                'order': 1,
                            },
                            {
                                'id': 153,
                                'title': 'Amet sequi nobis qui.',
                                'order': 2,
                            },
                            {
                                'id': 154,
                                'title': 'Quidem accusantium vitae est laborum.',
                                'order': 3,
                            },
                            {
                                'id': 155,
                                'title': 'Maxime optio nihil facilis commodi.',
                                'order': 4,
                            },
                            {
                                'id': 156,
                                'title': 'Esse alias odit incidunt fuga.',
                                'order': 5,
                            },
                            {
                                'id': 157,
                                'title': 'Modi ipsam veniam nemo at tempora.',
                                'order': 6,
                            },
                            {
                                'id': 158,
                                'title': 'Velit nihil rem.',
                                'order': 7,
                            },
                            {
                                'id': 159,
                                'title': 'Voluptatem ullam eaque officiis possimus doloremque quam dignissimos.',
                                'order': 8,
                            },
                        ],
                    },
                },
            },
        };
        const kanban3Options = {
            heading: {
                title: '父子列',
            },
            data: {
                cols: [
                    {title: '未完成', name: 'todo'},
                    {title: '进行中', name: 'doing'},
                    {title: '已指派', name: 'assigned', parentName: 'doing'},
                    {title: '实现中', name: 'wip', parentName: 'doing'},
                    {title: '已完成', name: 'done'},
                    {title: '其他', name: 'other', asParent: true},
                ],
                lanes: [
                    {title: '需求', name: 'story'},
                    {title: '任务', name: 'task'},
                ],
                items: {
                    story: {
                        todo: [
                            {id: '1', title: '用户需求1'},
                            {id: '2', title: '用户需求2'},
                            {id: '3', title: '用户需求3'},
                        ],
                        assigned: [
                            {id: '4', title: '用户需求4'},
                            {id: '5', title: '用户需求5'},
                            {id: '6', title: '用户需求6'},
                        ],
                    },
                    task: {
                        assigned: [
                            {id: '12', title: '任务1'},
                        ],
                        wip: [
                            {id: '7', title: '任务1'},
                            {id: '8', title: '任务2'},
                        ],
                        done: [
                            {id: '9', title: '任务3'},
                            {id: '10', title: '任务4'},
                            {id: '11', title: '任务5'},
                        ],
                    },
                },
            },
        };
        onZUIReady(() => {
            new window.zui.KanbanList('#kanbanList', {
                items: [kanbanOptions, kanban2Options, kanban3Options],
                height: 'calc(100vh - 160px)',
            });
        });
    },
};
