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
                .setTop("5em")
                .setWidth("37.5em")
                .setHeight("28.333333333333332em")
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
                        "id":"coordy",
                        "caption":"坐标纬度",
                        "type":"label",
                        "width":"8em"
                    },
                    {
                        "id":"coordx",
                        "caption":"坐标经度",
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
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button53")
                .setDirtyMark(false)
                .setLeft("13.333333333333334em")
                .setTop("35em")
                .setWidth("10.666666666666666em")
                .setHeight("3.6666666666666665em")
                .setCaption("添加数据")
                .setFontSize("14px")
                .onClick([
                    {
                        "desc":"打开输入框",
                        "type":"other",
                        "target":"url",
                        "args":[ ],
                        "method":"open----_self",
                        "okFlag":"_DI_succeed",
                        "koFlag":"_DI_fail",
                        "event":1
                    }
                ])
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