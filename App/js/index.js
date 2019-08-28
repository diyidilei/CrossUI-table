// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel4")
                .setDock("none")
                .setLeft("11.666666666666666em")
                .setTop("1.6666666666666667em")
                .setWidth("37.5em")
                .setHeight("37.5em")
                .setCaption("数据表格")
            );
            
            host.xui_ui_panel4.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"xui_ui_treegrid2")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setEditable(true)
                .setRowHandler(false)
                .setHeader([
                    {
                        "id":"name",
                        "caption":"名称",
                        "type":"label",
                        "width":"9em"
                    },
                    {
                        "id":"coordx",
                        "caption":"坐标经度",
                        "type":"label",
                        "width":"8em"
                    },
                    {
                        "id":"coordy",
                        "caption":"坐标纬度",
                        "type":"label",
                        "width":"9.5em"
                    },
                    {
                        "id":"handle",
                        "caption":"操作",
                        "type":"button",
                        "width":"9em",
                        "cellRenderer":""
                    }
                ])
                .setRows([
                    {
                        "cells":[
                            {
                                "value":"海南级猎潜艇"
                            },
                            {
                                "value":"19.153"
                            },
                            {
                                "value":"156.888"
                            },
                            {
                                "value":"绘制"
                            }
                        ]
                    },
                    {
                        "cells":[
                            {
                                "value":"Group 44"
                            },
                            {
                                "value":"46.444"
                            },
                            {
                                "value":"18.999"
                            },
                            {
                                "value":"绘制"
                            }
                        ]
                    },
                    {
                        "cells":[
                            {
                                "value":"黄蜂级导弹艇"
                            },
                            {
                                "value":"124.111"
                            },
                            {
                                "value":"100.488"
                            },
                            {
                                "value":"绘制"
                            }
                        ]
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button53")
                .setDirtyMark(false)
                .setLeft("13.333333333333334em")
                .setTop("41.666666666666664em")
                .setWidth("10.666666666666666em")
                .setHeight("3.6666666666666665em")
                .setCaption("添加数据")
                .setFontSize("14px")
                .onClick([
                    {
                        "desc":"打开对话框",
                        "type":"control",
                        "target":"xui_ui_dialog12",
                        "args":[ ],
                        "method":"show",
                        "event":1
                    },
                    "_xui_ui_button53_onclick"
                ])
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div26")
                .setLeft("0.8333333333333334em")
                .setTop("1.6666666666666667em")
                .setWidth("61.666666666666664em")
                .setHeight("35.833333333333336em")
                .setVisibility("visible")
                .setDisplay("none")
            );
            
            host.xui_ui_div26.append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"xui_ui_dialog12")
                .setLeft("16.666666666666668em")
                .setTop("10.833333333333334em")
                .setHeight("20.833333333333332em")
                .setCaption("添加数据")
                .setMinBtn(false)
            );
            
            host.xui_ui_dialog12.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input32")
                .setName("coordx")
                .setDirtyMark(false)
                .setLeft("1.25em")
                .setTop("5.416666666666667em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("坐标经度")
            );
            
            host.xui_ui_dialog12.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input33")
                .setName("name")
                .setDirtyMark(false)
                .setLeft("1.25em")
                .setTop("2.9166666666666665em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("名称")
            );
            
            host.xui_ui_dialog12.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input34")
                .setName("coordy")
                .setDirtyMark(false)
                .setLeft("1.25em")
                .setTop("7.916666666666667em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("坐标纬度")
            );
            
            host.xui_ui_dialog12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton12")
                .setLeft("7.916666666666667em")
                .setTop("12.083333333333334em")
                .setWidth("8.25em")
                .setHeight("3.0833333333333335em")
                .setCaption("添加")
                .onClick([
                    {
                        "desc":"储存数据",
                        "type":"control",
                        "target":"xui_ui_dialog12",
                        "args":[
                            "{page.xui_ui_dialog12.getFormValues()}",
                            "global",
                            "data"
                        ],
                        "method":"getFormValues",
                        "event":1,
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"增加表格",
                        "type":"control",
                        "target":"xui_ui_treegrid2",
                        "args":[
                            "{global.data}",
                            null,
                            null,
                            false
                        ],
                        "method":"insertRows",
                        "conditions":[
                            {
                                "left":"{global.data}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ]
                    },
                    {
                        "desc":"关闭弹出层",
                        "type":"control",
                        "target":"xui_ui_dialog12",
                        "args":[ ],
                        "method":"close"
                    }
                ])
            );
            
            host.xui_ui_dialog12.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input48")
                .setName("handle")
                .setDirtyMark(false)
                .setLeft("1.25em")
                .setTop("10.416666666666666em")
                .setWidth("18em")
                .setVisibility("hidden")
                .setLabelSize("8em")
                .setLabelCaption("操作")
                .setValue("绘制")
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton30")
                .setLeft("35em")
                .setTop("41.666666666666664em")
                .setWidth("12.333333333333334em")
                .setHeight("4.333333333333333em")
                .setCaption("绘制")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * 当鼠标单击时调用
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile} profile , 当前控件的配置对象(特征数据)
         * @param {Event} e , DOM事件元素
         * @param {String} src , 事件所属DOM元素的xid
         * @param {Boolean} value , 值
        */
        _xui_ui_button53_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
        },
        functions:{
            "draw":{
                "desc":"",
                "params":[ ],
                "actions":[
                    {
                        "desc":"动作 1",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "{functions.draw}"
                        ],
                        "method":"call"
                    },
                    function(){
                        window.drawMap()
                    }
                ]
            }
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});