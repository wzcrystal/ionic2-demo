####button
```html
<button ion-button (click)="presentActionSheet()" >基础上拉菜单</button>
```
其中`ion-button`必须加上，该指令是用来强化按钮标志，如果去掉该指令，按钮的样式无效果
`Color`属性用来修改按钮的颜色，其颜色值可以是已有的scss变量，也可以是js定义的变量，不能是直接的颜色值，如‘#ddd’。

####上拉菜单
上拉菜单是由一组按钮组成，其中危险角色的按钮在ios上会突出显示。可以通过点击背景或者esc按钮或者取消角色按钮关闭上拉菜单。还可以通过setTitle()方法设置标题，addButton()方法添加按钮。代码如下：
