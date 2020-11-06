import './less/index.less';
import $ from 'jquery';

const kuid = '5fa21fc96d0ae';
const editor = {
    "id": ["desc"],
    "tools": "simpleTools"
};
const K = KindEditor;

const bugTools = ['formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic',
    'underline', '|',
    'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist', 'insertunorderedlist', '|',
    'emoticons', 'image', 'code', 'link', '|', 'removeformat', 'undo', 'redo', 'fullscreen', 'source',
    'about'
];
const simpleTools = ['formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic',
    'underline', '|',
    'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist', 'insertunorderedlist', '|',
    'emoticons', 'image', 'code', 'link', 'table', '|', 'removeformat', 'undo', 'redo', 'fullscreen',
    'source', 'about'
];
const fullTools = ['formatblock', 'fontname', 'fontsize', 'lineheight', '|', 'forecolor', 'hilitecolor', '|',
    'bold', 'italic', 'underline', 'strikethrough', '|',
    'justifyleft', 'justifycenter', 'justifyright', 'justifyfull', '|',
    'insertorderedlist', 'insertunorderedlist', '|',
    'emoticons', 'image', 'insertfile', 'hr', '|', 'link', 'unlink', '/',
    'undo', 'redo', '|', 'selectall', 'cut', 'copy', 'paste', '|', 'plainpaste', 'wordpaste', '|',
    'removeformat', 'clearhtml', 'quickformat', '|',
    'indent', 'outdent', 'subscript', 'superscript', '|',
    'table', 'code', '|', 'pagebreak', 'anchor', '|',
    'fullscreen', 'source', 'preview', 'about'
];
const editorToolsMap = {
    fullTools: fullTools,
    simpleTools: simpleTools,
    bugTools: bugTools
};

// Kindeditor default options
const editorDefaults = {
    width: '100%',
    height: '200px',
    filterMode: true,
    bodyClass: 'article-content',
    urlType: 'absolute',
    uploadJson: createLink('file', 'ajaxUpload', 'uid=' + kuid),
    langType: 'zh_CN',
    cssData: 'html,body {background: none}.article-content{overflow:visible}.article-content, .article-content table td, .article-content table th {line-height: 1.3846153846; font-size: 13px;}.article-content .table-auto {width: auto!important; max-width: 100%;}',
    placeholder: "\u53ef\u4ee5\u5728\u7f16\u8f91\u5668\u76f4\u63a5\u8d34\u56fe\u3002",
    placeholderStyle: {
        fontSize: '13px',
        color: '#888'
    },
    pasteImage: {
        postUrl: createLink('file', 'ajaxPasteImage', 'uid=' + kuid)
    },
    syncAfterBlur: true,
    spellcheck: false
};

window.editor = {};

// Init kindeditor
const setKindeditor = function(element, options) {
    const $editor = $(element);
    const pasted = false;
    const editorID = $editor.attr('id');
    options = $.extend({}, editorDefaults, $editor.data(), options);
    if(editorID === undefined) {
        editorID = 'kindeditor-' + $.zui.uuid();
        $editor.attr('id', editorID);
    }

    const editorTool = editorToolsMap[options.tools || editor.tools] || simpleTools;

    /* Remove fullscreen in modal. */
    if(config.onlybody == 'yes') {
        const newEditorTool = new Array();
        for(i in editorTool) {
            if(editorTool[i] != 'fullscreen') newEditorTool.push(editorTool[i]);
        }
        editorTool = newEditorTool;
    }

    $.extend(options, {
        items: editorTool,
        placeholder: $editor.attr('placeholder') || options.placeholder || '',
        pasteImage: {
            postUrl: createLink('file', 'ajaxPasteImage', 'uid=' + kuid),
            placeholder: $editor.attr('placeholder') ||
                "\u53ef\u4ee5\u5728\u7f16\u8f91\u5668\u76f4\u63a5\u8d34\u56fe\u3002"
        },
    });

    try {
        const keditor = K.create('#' + editorID, options);
        window.editor['#'] = window.editor[editorID] = keditor;
        $editor.data('keditor', keditor);
        return keditor;
    } catch (e) {
        return false;
    }
};

// Init kindeditor with jquery way
$.fn.kindeditor = function(options) {
    return this.each(function() {
        setKindeditor(this, options);
    });
};

// Init all kindeditor
const initKindeditor = function(afterInit) {
    const $submitBtn = $('form :input[type=submit]');
    if($submitBtn.length) {
        $submitBtn.next('#uid').remove();
        $submitBtn.after("<input type='hidden' id='uid' name='uid' value=" + kuid + ">");
    }
    if($.isFunction(afterInit)) afterInit();
    $.each(editor.id, function(key, editorID) {
        setKindeditor('#' + editorID);
    });
};

// Init all kindeditors when document is ready
$(initKindeditor);
