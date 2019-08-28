xui.Class('App.ColumnsNone9', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane10")
                .setDock("fill")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input20")
                .setDirtyMark(false)
                .setLeft("5.833333333333333em")
                .setTop("10.833333333333334em")
                .setWidth("32.166666666666664em")
                .setHeight("12.5em")
                .setLabelSize("8em")
                .setLabelCaption("请输入您要绑定的数据\n")
                .setMultiLines(true)
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});