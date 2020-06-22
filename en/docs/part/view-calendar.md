section: view
id: calendar
description: Display time-limited content on your calendar
icon: icon-calendar
filter: rili rl
---

# Calendar

You can visualize daily schedules and plan on the calendar. ZUI provides a simple and practical calendar plugin.

<div class="alert alert-warning">
  <h4>Compatibility</h4>
  <ul>
    <li>Drag and drop is not supported on the touch screen;</li>
    <li>The experience is not the best on a small screen.</li>
  </ul>
</div>

## Example

Below is a monthly schedule shown on the calendar. Click the action buttons above the calendar to switch the month. Drag events to other dates to reschedule it on the calendar.

Schedule weekly or daily on the calendar is coming soon.

<div class="example">
  <div class="calendar" id="calendarExample"></div>
</div>

```html
<!-- HTML Code -->
<div id="calendar" class="calendar"></div>
```

```js
/* JS Code */
$('#calendar').calendar();
```

## How to use it

### Introducing resources

Calendar is an independent component. You need to introduce resources from lib/ from local or CDN:

```html
<link href="lib/calendar/zui.calendar.min.css" rel="stylesheet">
<script src="lib/calendar/zui.calendar.min.js"></script>
```

### Start parameters

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`startView`</td>
      <td>*   `"month"` (default). Monthly view.</td>
      <td>Start view. The default is the monthly view.</td>
    </tr>
    <tr>
      <td>`startDate`</td>
      <td>*   `"today"` (default). The start date is today.
*   `"2014-8-14"`: A string of `Date` instance</td>
      <td>The date the start view is on.</td>
    </tr>
    <tr>
      <td>`limitEventTitle`</td>
      <td>*   `true` (default)
*   `false`</td>
      <td>Whether to limit the length of the event title. If `true`, limit the event title to one line. The exceeded part will be hidden.</td>
    </tr>
    <tr>
      <td>`storage`</td>
      <td>*   `true` (default)
*   `false`</td>
      <td>Whether to enable local storage to improve the experience. If `ture`, record the view and date the user is in. Refresh or close the browser, and visit it again, then the last view will be displayed.</td>
    </tr>
    <tr>
      <td>`withHeader`</td>
      <td>*   `true` (default)
*   `false`</td>
      <td>Whether to display the header with an action bar. If `true`, the header will be displayed, including buttons to switch views or dates.</td>
    </tr>
    <tr>
      <td>`dragThenDrop`</td>
      <td>*   `true` (default)
*   `false`</td>
      <td>Whether to enable the drag-and-drop. If `true`, you can drag an event into a date box to change the schedule.</td>
    </tr>
    <tr>
      <td>`hideEmptyWeekends`</td>
      <td>*   `true`
*   `false` (default)</td>
      <td>If there is no event on the weekend, reduce the space of the weekend to save space.</td>
    </tr>
    <tr>
      <td>`hideFirstDayNumber`</td>
      <td>*   `true`
*   `false` (default)</td>
      <td>Hide date at first day of months</td>
    </tr>
    <tr>
      <td>`lang`</td>
      <td>`"zh_cn"`, `"zh_tw"`, `"en"`</td>
      <td>The language used on the current interface. If blank, it will read the `html` lang property. Otherwise, set as `"zh_cn"`.</td>
    </tr>
    <tr>
      <td>`data`</td>
      <td>`{calendars: {}, events: []}`</td>
      <td>Initially loaded calendar data</td>
    </tr>
    <tr>
      <td>`eventSorter`</td>
      <td>`null`</td>
      <td>Specify a function to compare the sizes of two event object when sorting events. `event1` and `event2` are provided to compare them. If the returned is greater than 0, `event2` will be placed in front of `event1`. If less than 0,`event1` will be placed in front of `event2`. If it equals to 0, their positions are not changed. If you do not specify this option, sorted by the date of the event.</td>
    </tr>
    <tr>
      <td>`eventCreator`</td>
      <td>`null`</td>
      <td>Specify a function to create the event corresponding to the DOM element. Three parameters are provided: `event`- Event object, `$event`- Automatically generated DOM element, and `cal`- the current calendar instance object.</td>
    </tr>
    <tr>
      <td>`dayFormater`</td>
      <td>`null`</td>
      <td>Specify a function to further process each date DOM element. Four parameter are provided: `$cell`- Corresponding to the date DOM element, `date`- For the corresponding date, `events`- List of events within the date, and `cal` - The current calendar instance object.</td>
    </tr>
  </tbody>
</table>

### Methods

The calendar plugin provides a set of methods to add new events to the calendar, change an event or delete an event.

#### Get a calendar object instance

To use the calendar object method, you need to get the calendar object instance first. Each reference to the calendar object instance is stored in the corresponding jQuery object data as `zui.calendar`.

```js
/* Get a calendar object instance */
var calendar = $('#calendar').data('zui.calendar');
```

#### Switch view

To switch views or the date, use the calendar object `display(view, date)` method.

```js
/* Switch or refresh views */
var calendar = $('#calendar').data('zui.calendar');
calendar.display('month', '2014-8-14');   // Switch to monthly view, and set the date range to August 2014.
calendar.display('month');                // Switch to monthly view, and use current month
calendar.display();                       // Refresh the current view
```

#### Reset calendar data

To reset calendar data and refresh the interface, use the calendar object `resetData(data)` method.

```js
/* Reset calendar data */
var calendar = $('#calendar').data('zui.calendar');
calendar.resetData({
    calendars: {
        // New calendar data
    },
    events: [
        // New event data
    ]
});
```

#### Add events

##### Add an event

Use a new event object as a parameter to call `addEvents `method.

```js
/* Add an event */
var calendar = $('#calendar').data('zui.calendar');
var newEvent = {title: 'Time to eat', desc: 'Want more', start: new Date(2018,1,4,12,10,0), end: new Date(2018,1,3,13,10,0)};
calendar.addEvents(newEvent);
```

##### Add multiple events

Use an array of events as parameters to call `addEvents`, so multiple events can be added at once.

```js
/* Add multiple events */
var calendar = $('#calendar').data('zui.calendar');
var newEvents =
[
  {title: 'Time to eat', desc: 'Want more', start: new Date(2018,1,4,12,10,0), end: new Date(2018,1,3,13,10,0)},
  {title: 'Time to study', desc: 'Study more', start: new Date(2018,1,3,13,10,0), end: new Date(2018,1,4,10,0,0)}
];
calendar.addEvents(newEvents);
```

##### Event objects

Event object instances can specify the following properties:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Property</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`title`</td>
      <td>String</td>
      <td>Event title</td>
    </tr>
    <tr>
      <td>`desc`</td>
      <td>String. Optional.</td>
      <td>Event description</td>
    </tr>
    <tr>
      <td>`allDay`</td>
      <td>*   `true`
*   `false` (default)</td>
      <td>Whether it is an all-day event</td>
    </tr>
    <tr>
      <td>`start`</td>
      <td>*   `"2014-8-14"`, a string representing the date
*   A `Date` instance</td>
      <td>Start date of the event</td>
    </tr>
    <tr>
      <td>`end`</td>
      <td>*   `"2014-8-14"`，a string representing the date
*   A `Date` instance</td>
      <td>The end date of the event. If `allDay` is `true`(an all- day event), this property is optional.</td>
    </tr>
    <tr>
      <td>`calendar`</td>
      <td>String. Optional.</td>
      <td>Calendar which the event is on</td>
    </tr>
    <tr>
      <td>`data`</td>
      <td>Any value</td>
      <td>An additional property to store data associated with the event</td>
    </tr>
  </tbody>
</table>

#### Remove event

Specify the `id` property of the events to be removed, or specify multiple `id` and put them in an array as a parameter to call `removeEvents` method.

```js
/* Remove event */
var calendar = $('#calendar').data('zui.calendar');
calendar.removeEvents('4343');                   // Remove the event with an id as 4343
calendar.removeEvents(['4343', '4344', '4345']); // Remove multiple events at once
```

#### Update event

##### Update event properties

Use the update object or an array containing the update objects as a parameter to call `updateEvents` method.

```js
/* Remove event */
var calendar = $('#calendar').data('zui.calendar');
calendar.updateEvents({    // Update an event
    event: '343',          // Event to be updated
    changes: [{
          change: 'title',          // The title of the property to be changed
          to:     'a new event title'   // The value to be changed to
       }, {                         // Change another attribute at the same time
          change: 'start',          // The title of the property to be changed
          to:     new Date(2018,1,4,0,0,0)  //  The value to be changed to
       }
    ]
});
calendar.updateEvents([    // Update multiple events at once
    {
        event: '343', // Update the first event
        changes: [{
              change: 'title',          // The title of the property to be changed
              to:     'a new event title'  //  The value to be changed to
         }, {                            // Change another attribute at the same time
            change: 'start',          // The name of the property to be changed
            to:     new Date(2018,1,4,0,0,0)  //  The value to be changed to
         }]
    }, {
        event: '344', // Update another event
        changes: [
            // ...
        ]
    },
]);
```

#### Add calendars

##### Add a calendar

Use a new calendar object as a parameter to call `addCalendars` method.

```js
/* Add a calendar */
var calendar = $('#calendar').data('zui.calendar');
var newCalendar = {name: 'work', title: 'jobs', desc: 'This is a work calendar.', color: '#ff0000'};
calendar.addCalendars(newCalendar);
```

##### Add multiple calendars

Call an array containing a set of calendars as arguments`addCalendars`Method to add multiple calendars at once。

```js
/* Add multiple calendars */
var calendar = $('#calendar').data('zui.calendar');
var newCalendars =
[
  {name: 'work', title: 'jobs', desc: 'This is a work calendar.', color: '#ff0000'},
  {name: 'home', title: 'family', desc: 'This is a family calendar.', color: '#00ff00'}
];
calendar.addCalendars(newCalendars);
```

##### Calendar object

Calendar object instances can specify the following properties:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Property</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`name`</td>
      <td>String</td>
      <td>Calendar name</td>
    </tr>
    <tr>
      <td>`title`</td>
      <td>String. Optional.</td>
      <td>Calendar title</td>
    </tr>
    <tr>
      <td>`desc`</td>
      <td>String. Optional.</td>
      <td>Calendar description</td>
    </tr>
    <tr>
      <td>`color`</td>
      <td>A string representing a hexadecimal color. Optional.</td>
      <td>Calendar color</td>
    </tr>
  </tbody>
</table>

#### Get and synchronize data

Synchroonize your data when adding, updating or removing events on the calendar.

You can get data for all current calendars or events at any time.

```js
/* Get calendar data */
var calendar  = $('#calendar').data('zui.calendar');
var calendars = calendar.calendars; // Get all calendar object instances
var events    = calendar.events;    // Get all event object instances
```

You can manually change all properties after you have obtained calendar event data. You need to call`display()` method to apply changes to the interface.

### Event

Events in the calendar can be bound via jQuery methods or written in the startup parameters.

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Event name</th>
      <th>jQuery event name</th>
      <th>Description</th>
      <th>Parameters of special events</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`clickTodayBtn`</td>
      <td>`"clickTodayBtn.zui.calendar"`</td>
      <td>Triggered when clicking today button on the calendar header</td>
      <td>no</td>
    </tr>
    <tr>
      <td>`clickNextBtn`</td>
      <td>`"clickNextBtn.zui.calendar"`</td>
      <td>Triggered when the Next button of date range is clicked</td>
      <td>no</td>
    </tr>
    <tr>
      <td>`clickPrevBtn`</td>
      <td>`"clickPrevBtn.zui.calendar"`</td>
      <td>Triggered when the Previous button of date range is clicked</td>
      <td>no</td>
    </tr>
    <tr>
      <td>`clickEvent`</td>
      <td>`"clickEvent.zui.calendar"`</td>
      <td>Triggered when an event is clicked</td>
      <td>*   `event.element`: Get the current click DOM object instance;
*   `event.event`: Event object instance currently being clicked;
*   `event.events`: Event object instance array, all current events.</td>
    </tr>
    <tr>
      <td>`beforeAddCalendars`</td>
      <td>`"beforeAddCalendars.zui.calendar"`</td>
      <td>Triggered before adding a new calendar. If `false` is returned, the addition will be cancelled.</td>
      <td>*   `event.newCalendar`: New calendar object instance;
*   `event.data`: All calendar event data.</td>
    </tr>
    <tr>
      <td>`addCalendars`</td>
      <td>`"addCalendars.zui.calendar"`</td>
      <td>Triggered after adding a new calendar</td>
      <td>*   `event.newCalendars`: All new calendar object instances;
*   `event.data`: All calendar event data;</td>
    </tr>
    <tr>
      <td>`beforeAddEvent`</td>
      <td>`"beforeAddEvent.zui.calendar"`</td>
      <td>Triggered before adding a new event to the calendar. If `false` is returned, the addition will be cancelled.</td>
      <td>*   `event.newEvent`: New event object instance;
*   `event.data`: All calendar event data.</td>
    </tr>
    <tr>
      <td>`addEvents`</td>
      <td>`"addEvents.zui.calendar"`</td>
      <td>Triggered after adding one or more events to the calendar</td>
      <td>*   `event.newEvents`: All new event object instances;
*   `event.data`: All calendar event data.</td>
    </tr>
    <tr>
      <td>`beforeRemoveEvent`</td>
      <td>`"beforeRemoveEvent.zui.calendar"`</td>
      <td>Triggered before an event is removed from the calendar. If `false` is returned, the removal will be cancelled.</td>
      <td>*   `event.event`: Event object instance to be removed;
*   `event.eventId` ID of an event to be removed;
*   `event.data`: All calendar event data.</td>
    </tr>
    <tr>
      <td>`removeEvents`</td>
      <td>`"removeEvents.zui.calendar"`</td>
      <td>Occurs after one or more events are removed from the calendar</td>
      <td>*   `event.removedEvents` All event object instances that need to be removed
*   `event.data` All calendar event data</td>
    </tr>
    <tr>
      <td>`beforeChange`</td>
      <td>`"beforeChange.zui.calendar"`</td>
      <td>Triggered before changing an event. If `false` is returned, the change will be cancelled.</td>
      <td>*   `event.event`: The event object instance to be changed;
*   `event.change`: The name of the property to be changed;
*   `event.from`: Change the value of this property before;
*   `event.to`: New value after it is changed.</td>
    </tr>
    <tr>
      <td>`change`</td>
      <td>`"change.zui.calendar"`</td>
      <td>Triggered when one or more events change</td>
      <td>*   `event.data`: All calendar event data;
*   `event.changes`: Array. All changes detail and each item contains the following attributes:
-   `event.event`: The event object instance to be changed;
-   `event.change`: The name of the property to be changed;
-   `event.from`: Change the value of this property before;
-   `event.to`: New value after it is changed.</td>
    </tr>
    <tr>
      <td>`beforeDisplay`</td>
      <td>`"beforeDisplay.zui.calendar"`</td>
      <td>Triggered before the view is displayed. If `false` is returned, the display will be cancelled.</td>
      <td>*   `event.view`: String. The name of the view to be displayed;
*   `event.date`: Date event object instance. Date to be displayed.</td>
    </tr>
    <tr>
      <td>`display`</td>
      <td>`"display.zui.calendar"`</td>
      <td>Triggered after the view is displayed</td>
      <td>*   `event.view`: String. The name of the view to be displayed.
*   `event.date`: Date event object instance. The date to be displayed.</td>
    </tr>
    <tr>
      <td>`clickCell`</td>
      <td>`"clickCell.zui.calendar"`</td>
      <td>Triggered when a date cell is clicked</td>
      <td>*   `event.element`: Get the cell instance being clicked;
*   `event.view`: String. Current view name;
*   `event.date`:  Date event object instance. The date of the current cell.</td>
    </tr>
  </tbody>
</table>

#### Process events with startup parameters

```js
$('calendar').calendar({
    clickEvent: function(event) {
        console.log(event);
        // console.log("You clicked on an event.");
        // Process the click event
        // ...
    }
});
```

#### Use jQuery method to bind events

```js
$('calendar').calendar().on("clickEvent.zui.calendar", function(event) {
    console.log(event);
    // console.log("You clicked on an event");
    // Process the click event
    // ...
});
```

<script src="../dist/lib/calendar/zui.calendar.js"></script>
<link href="../dist/lib/calendar/zui.calendar.css" rel="stylesheet">
<script>
function afterPageLoad() {
  var now = new Date();
  var start = now.getSeconds(),
      calendars = ['success', 'danger', 'important', 'warning', 'info', 'specail', 'primary'],
      rooms = ['A003', 'A004', 'A010', 'A143', 'B008', 'B098', 'B487', 'B340', 'Z000', 'Z431', 'Z018', 'Z864'],
      peoples = ['Altman', 'Walker', 'Geoscientist', 'Hulk', 'Catouse', 'Passerby C'],
      events = ['Eating', 'Drink water', 'chat', 'go to bed', 'Beat the wall', 'Self-talk', 'Moving the chair', 'Sing', 'Internet access', 'Sleepwalking', 'Watching the ceiling'],
      eventsTypes = ['happy', 'sad', ':]'],
      tools = ['table', 'chair', 'Water cup', 'gun', 'Follower'],
      descs = ['not done', 'This time failed', 'In vain', 'very satisfied', 'Prohibit recurrence', 'also', 'Unknown situation', 'Found unknown signs'];
  var calEventGenerater = function() {
          var start = now.clone().addDays(Math.random() * 400 - 200);
          var e = {
              title: (Math.random() > 0.5 ? ('with' + peoples[Math.floor(Math.random()*peoples.length)]) : '') + events[Math.floor(Math.random()*events.length)],
              desc: descs[Math.floor(Math.random()*descs.length)],
              calendar: calendars[Math.floor(Math.random()*calendars.length)],
              allDay: Math.random() > 0.9,
              start: start,
              end: start.clone().addDays(Math.random() > 0.9 ? Math.random() * 5 : 0)
          };
          return e;
      };
  var dtDataGenerater = function(rowsCount) {
          var data = {
              cols: [
                  {width: 100, text: '#', type: 'number', flex: false, colClass: 'text-center'},
                  {sort: 'down', width: 160, text: 'time', type: 'date', flex: false, colClass: ''},
                  {width: 80, text: 'room', type: 'string', flex: false, colClass: ''},
                  {width: 100, text: 'character', type: 'string', flex: false, colClass: ''},
                  {width: 'auto', text: 'event', type: 'string', flex: false, colClass: ''},
                  {width: 100, text: 'Event type', type: 'string', flex: true, colClass: 'text-center'},
                  {sort: false, width: 200, text: 'description', type: 'string', flex: true, colClass: ''},
                  {width: 100, text: 'Related person', type: 'string', flex: true, colClass: ''},
                  {width: 100, text: 'Related items', type: 'string', flex: true, colClass: ''},
                  {width: 60, text: 'score', type: 'number', flex: false, colClass: 'text-center text-important'},
                  {sort: false, width: 'auto', text: 'operating', type: 'string', flex: false, colClass: ''},
              ],
              rows: []
          };
          for (var i = 0; i < rowsCount; i++) {
              var row = {checked: Math.random() > 0.9, data: [
                  start + i + 101000,
                  now.format('yyyy-MM-dd hh:mm:ss'),
                  rooms[Math.floor(Math.random()*rooms.length)],
                  peoples[Math.floor(Math.random()*peoples.length)],
                  events[Math.floor(Math.random()*events.length)],
                  eventsTypes[Math.floor(Math.random()*eventsTypes.length)],
                  descs[Math.floor(Math.random()*descs.length)],
                  peoples[Math.floor(Math.random()*peoples.length)],
                  tools[Math.floor(Math.random()*tools.length)],
                  Math.floor(Math.random()*100)/10,
                  "<a href='###'><i class='icon-ok-sign'></i></a> &nbsp; <a href='###' class='text-danger'><i class='icon-trash'></i></a> "
              ]};
              data.rows.push(row);
              now = new Date(now.getTime() - (Math.random()*1000*60*60));
          };
          return data;
      },
      calDataGenerater = function(count) {
          var data = {
              calendars: [
                  {name: "success", color: 'green'},
                  {name: "warning", color: 'yellow'},
                  {name: "danger", color: 'red'},
                  {name: "info", color: 'blue'},
                  {name: "important", color: 'brown'},
                  {name: "special", color: 'purple'},
                  {name: "primary", color: 'primary'}
              ],
              events: []
          };
          for (var i = count - 1; i >= 0; i--) {
              data.events.push(calEventGenerater());
          }
          return data;
      };
  $(function() {
      $('#pageContent .calendar').each(function() {
          var $this = $(this);
          var data = calDataGenerater($this.data('exampleCount') || 100);
          $this.calendar({data: data, clickEvent: function(e) {
              $.zui.messager.show('You clicked <strong>' + e.event.title + '</strong>');
          }, beforeChange: function(e) {
              if(e.change === 'start')
              {
                  $.zui.messager.show('Start time changed to ' + e.to.format('yyyyyearMMmonthddday hh:mm'));
              }
          }});
      });
  });
}
</script>
