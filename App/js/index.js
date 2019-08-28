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
                .setLeft("12.5em")
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
                                "value":"100.478"
                            },
                            {
                                "value":"绘制"
                            }
                        ]
                    }
                ])
            );
            
            host.xui_ui_panel4.append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"xui_ui_dialog2")
                .setLeft("5.333333333333333em")
                .setTop("14.666666666666666em")
                .setZIndex(1003)
                .setCaption("对话框")
                .setMinBtn(false)
            );
            
            host.xui_ui_dialog2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1")
                .setName("name")
                .setDirtyMark(false)
                .setLeft("-0.4166666666666667em")
                .setTop("2.0833333333333335em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("名称")
            );
            
            host.xui_ui_dialog2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2")
                .setName("coordx")
                .setDirtyMark(false)
                .setLeft("-0.4166666666666667em")
                .setTop("4.583333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("坐标经度")
            );
            
            host.xui_ui_dialog2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3")
                .setName("coordy")
                .setDirtyMark(false)
                .setLeft("-0.4166666666666667em")
                .setTop("7.083333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("坐标纬度")
            );
            
            host.xui_ui_dialog2.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton4")
                .setLeft("7.5em")
                .setTop("11.666666666666666em")
                .setWidth("8.25em")
                .setHeight("3.0833333333333335em")
                .setCaption("添加")
                .onClick([
                    {
                        "desc":"储存数据",
                        "type":"control",
                        "target":"xui_ui_dialog2",
                        "args":[
                            "{page.xui_ui_dialog2.getFormValues()}",
                            "global",
                            "adddata"
                        ],
                        "method":"getFormValues",
                        "redirection":"other:callback:call",
                        "event":1
                    },
                    {
                        "desc":"增加表格",
                        "type":"control",
                        "target":"xui_ui_treegrid2",
                        "args":[
                            "{global.adddata}",
                            null,
                            null,
                            false
                        ],
                        "method":"insertRows",
                        "conditions":[
                            {
                                "left":"{global.adddata}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ]
                    },
                    {
                        "desc":"关闭弹出层",
                        "type":"control",
                        "target":"xui_ui_dialog2",
                        "args":[ ],
                        "method":"close"
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
                        "target":"xui_ui_dialog2",
                        "args":[ ],
                        "method":"showModal",
                        "event":1
                    },
                    {
                        "desc":"打开输入框",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "请输入您要添加到数据"
                        ],
                        "method":"prompt",
                        "okFlag":"_prompt_ok",
                        "koFlag":"_prompt_cancel",
                        "event":1,
                        "onOK":3,
                        "onKO":4
                    },
                    {
                        "desc":"增加数据",
                        "type":"control",
                        "target":"xui_ui_treegrid2",
                        "args":[
                            " {temp.okData}",
                            null,
                            null,
                            false
                        ],
                        "method":"insertRows",
                        "conditions":[
                            {
                                "left":" {temp.okData}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ]
                    },
                    {
                        "desc":"关闭对话框",
                        "type":"control",
                        "target":"xui_ui_dialog2",
                        "args":[ ],
                        "method":"close"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.HiddenInput")
                .setHost(host,"xui_ui_hiddeninput1")
                .setName("handle")
                .setValue("绘制")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
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