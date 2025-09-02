import {ComponentFromReact} from '@zui/core';
import {FormBuilder as FormBuilderReact} from '../components';
import {FormBuilderOptions} from '../types';

export class FormBuilder extends ComponentFromReact<FormBuilderOptions, FormBuilderReact> {
    static NAME = 'FormBuilder';

    static Component = FormBuilderReact;
}

FormBuilder.register();
