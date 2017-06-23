(function(){ 
    //Section 1 : 按下自定义按钮时执行的代码 
    var a= { 
        exec:function(editor){ 
        	editor.popup(editor.config.batchImagUrl+"&editor="+editor.name);
        } 
    }, 
    //Section 2 : 创建自定义按钮、绑定方法 
    b='batchimage'; 
    CKEDITOR.plugins.add(b,{ 
        init:function(editor){ 
            editor.addCommand(b,a); 
            editor.ui.addButton('batchimage',{ 
                label:'多图选择', 
                icon: this.path + 'batch_image.png', 
                command:b 
            }); 
        } 
    }); 
})(); 