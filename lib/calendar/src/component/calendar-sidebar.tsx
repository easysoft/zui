import {Attributes} from 'preact';
import type {CalendarSidebarProps, CalendarEventGroup} from '../types';
import {HElement, VNode} from '@zui/core';
import '../../../checkbox/src/component/index';
import '../i18n';
import '../../../checkbox/src/style/index.css';


//这个组件只需要渲染事件集，勾选后是否显示事件就行了

export class CalendarSidebar<P extends CalendarSidebarProps = CalendarSidebarProps> extends HElement<P, {}> {

    groupSetManege(groupId: string, isChecked: boolean) {
        const {calendarGroupMap, setCalendarGroupMap} = this.props;
        const group = calendarGroupMap?.get(groupId);
        const newMap = new Map(calendarGroupMap);
        if (group && newMap && setCalendarGroupMap) {
            group.checked = isChecked;
            newMap?.set(groupId, group);
            console.log(newMap);
            setCalendarGroupMap(newMap);
        }
    }

    renderEvent(calendarEventGroups: Map<string, CalendarEventGroup>): VNode<Attributes> | VNode<Attributes>[] | null {
        const result = [];
        for (const [key, value] of calendarEventGroups.entries()) {
            if (value && key) {
                result.push(<label class="checkbox" onChange={(event)=>{
                    const target = event.target as HTMLInputElement;
                    this.groupSetManege(target?.dataset.group || '', target?.checked || false);
                }}>
                    <input type="checkbox" data-group ={key} defaultChecked={true}></input>{value.title}
                </label>);
            }
        }
        return result;
    }

    render(): VNode<Attributes> {
        const {calendarGroupMap} = this.props;
        return (<div className='sidebar'>{this.renderEvent(calendarGroupMap || new Map<string, CalendarEventGroup>())} </div>);
    }
}  