# Calendar 日历

用于展示和管理事件的日历组件。它允许用户查看日期、添加特定日期的事件来安排日程。提供可配置的事件与日历集。

## 基本使用

使用HTML标签 `<div>` 作为容器来实现日历组件，可使用zui-create-calendar、new zui.Calendar()等指令来配置日历组件。

## 默认样式

<div class="calendar-normal"></div>

## 自定义事件与事件集

 <!-- 日历集和事件在日历中都可以进行自定义配置, 日历集和事件id都需要唯一，否则会导致日历显示异常。
 事件与事件集的配置项如下： -->
 事件是在日历中添加的具体事件，可自定义事件的颜色、文字、日期、拖拽回调函数、点击回调函数等。事件集是一组事件的集合与事件唯一关联。事件、事件集id都需要唯一。任意一个事件可进行拖拽来修改事件时间,并会触发回调函数。左侧日历集可决定属于该日日历集的事件是否显示。
<div class='calendar-event'></div>

## 可配置项

### 日历:
| 参数                   | 类型                                                     | 作用                                       |
|----------------------|:------------------------------------------------------:|------------------------------------------|
| `date`               | Date                                                   | 当前日期                                   |
| `calendarEvents`     | CalendarEvent[]                                        | 当前的日历事件数组                        |
| `calendarEventGroups`| CalendarEventGroup[]                                   | 当前的事件组数组                          |
| `mode`               | 'day' \| 'week' \| 'year'                             | 日历的显示模式                            |
| `showCalendarGroup`  | boolean                                               | 是否显示日历事件组                       |
| `shrinkFreeWeekend`  | boolean                                               | 是否压缩空闲周末                          |
| `onDateClick`        | (date: Date) => void                                  | 日期点击时的回调函数                      |
| `onDragChange`       | (newState: DraggableState, oldState: DraggableState) => void | 拖动状态变化时的回调函数          |
| `onEventClick`       | (e: CalendarEvent) => void                            | 事件点击时的回调函数                     |
| `maxVisibleEvents`   | number                                                | 每个日期最大可见事件数量                  |
                   |


### 事件属性:
calendarEvent:

| 参数       | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `id`              | string | 事件的唯一标识符 |
| `title`         | string | 事件的标题 |
| `calendarEventGroup`      | string | 事件所属的事件组ID |
| `date`      | Date | 事件的日期 |
| `description`           | string | 事件的描述（可选）  |

### 事件集:
CalendarEventGroups:

| 参数       | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `id`              | string | 事件组的唯一标识符 |
| `title`         | string | 事件组的标题（可选） |
| `color`         | string | 事件组的颜色（可选） |
| `checked`       | boolean | 事件组是否被选中（可选） |


