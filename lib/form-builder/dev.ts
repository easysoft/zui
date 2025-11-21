import 'zui-dev';
import type {ComponentType} from 'preact';
import yaml from 'js-yaml';
import {$} from '@zui/core';
import '@zui/button';
import '@zui/icons';
import '@zui/btn-group';
import '@zui/input-group';
import '@zui/input-control';
import '@zui/css-icons';
import '@zui/panel';
import '@zui/toolbar';
import '@zui/tooltip';
import '@zui/picker';
import '@zui/search-box';
import '@zui/list';
import '@zui/menu';
import '@zui/form';
import '@zui/collapsible';
import '@zentao/icons';
import '@zentao/picker/src/style';
import '@zui/datetime-picker';
import '@zui/color-picker';
import highlight from 'highlight.js';
import {ProgressCircle} from '@zui/progress-circle';
import {FormBuilder, type FormSchema} from './src/main';
import {schema as schemaExampleStandard, defaultData} from './dev/form-schema-standard';

onPageUpdate(() => {
    const formBuilder = new FormBuilder('#formBuilderExample', {
        component: 'form',
        formName: 'json',
        schema: schemaExampleStandard as FormSchema,
        defaultData,
        widgets: {
            progressCircle: ({value}) => [ProgressCircle as unknown as ComponentType, {percent: value || 0}],
        },
        onSubmit: (event, data) => {
            console.log('onSubmit', event, data);
            return false;
        },
        onDataChange: (data) => {
            const yamlString = yaml.dump(data);
            const html = highlight.highlight(yamlString, {language: 'yaml'}).value;
            $('#formDataExample').html(html);
        },
        onFieldChange: (path, value) => {
            console.log('onFieldChange', path, value);
            if (path === 'specials.progressCircleChanger') {
                return {
                    'specials.progressCircle': value,
                };
            }
        },
        afterRender(first) {
            if (first) {
                Object.assign(window, {formBuilder: this});
            }
        },
        actions: [
            {btnType: 'submit', text: '提交', type: 'primary'},
        ],
    });
    console.log('> formBuilder', formBuilder);

    const schemaCodeHtml = highlight.highlight(JSON.stringify(schemaExampleStandard, null, 4), {language: 'json'}).value;
    $('#formSchemaExample').html(schemaCodeHtml);
});
