# mn-component-maker

一键式创建React，Vue组件

## v1.2.8

支持自由选择创建`css`,`scss`,`less`

## 功能

1. 一键式创建React组件，不是React脚手架！
2. 支持一次创建多个组件
3. 支持自由选择创建`css`,`Scss`,`Less`
4. 支持无状态组建（stateless function）

### Usage
##### React组件创建使用
``` js
// React组件创建使用
npm i -g mn-component-maker
mkcomponent App
// 此时你创建了一个名字为App的组件
mkcomponent Header,Body,Footer
// 此时你创建了三个组件，分别为Header,Body,Footer
```
##### Vue组件创建使用
``` js
//Vue组件创建使用
npm i -g mn-component-maker
mkcomponent -l Body -t vue
//此时你创建了一个名字为Body的组件
```

#### 创建样式为Scss的组件
``` js
mkcomponent -s Body
//创建Body组件，但是样式文件为Scss
```
#### 创建样式为Less的组件

``` js
mkcomponent -l Body
//创建Body组件，但是样式文件为less
```

## React组件详情

一个组件为一个文件夹，文件夹目录为

- [name].jsx
- [name].css
- index.jsx
## Vue 组件详情
- [name].css
- index.vue

## 文件内容 React

### [name].jsx

```
import React from 'react';
import styles from './[name].css'
class [name] extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = [name];
    }
    render() {
        return (
            <div className={styles.container}>
            [name]
            </div>
        )
    }
}
export default [name];
```

### [name].css

```
.container {
  
}
```

### index.jsx

```
import [name] from './hh'

export default [name]
```

## 文件内容 Vue

### index.vue
```
<template>
  <div class="[name]">
        [name]组件
    </div>
</template>'
<script>
export default {
  name: [name]
  data(){
    return {
    }
  }
};
</script>
<style scoped lang='css' src='[name].css'>
</style>
```
### [name].css

```
.container {
  
}
```