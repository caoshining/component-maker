# mn-component-maker

the cli to create react components

[中文版](https://github.com/caoshining/component-maker/blob/master/README-zh.md)

## v1.2.0

support `css`,`scss`,`less`

## support

1. the cli to create react components
2. support create multiple components
3. support `css`,`Scss`,`Less`
4. support stateless function(or you can say pure component)
### Usage

###### React Component Creat
```
mkcomponent App
//you will create React component named App
mkcomponent Header,Body,Footer
//you will create React compoennts named Header,Body,Footer
```
###### Vue Component Creat
```
npm i -g mn-component-maker
mkcomponent -l Body -t vue
```

#### create component with Scss
```
mkcomponent -s Body
//create React components named Body with Scss
```
#### create React component with Less
```
mkcomponent -l Body
//create React components named Body with Less
```

#### create React component with Less
```
mkcomponent -p Body
//you will create pure component for stateless function
```

#### create Vue component with stateless
```
mmkcomponent -l Body -t vue
```

## component details React

- [name].jsx
- [name].css
- index.jsx

## component details Vue
- [name].css
- index.vue
## file details For React

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

## file details For Vue

### index.vue
```
<template>
  <div class="-t">
        -t组件
    </div>
</template>'
<script>
export default {
  name: '-t'
  data(){
    return {
    }
  }
};
</script>
<script>
    export default{
      name: '-t'
      data(){
        return {
          telphone:"tel:021 61266174",
        }
      }
    }
</script>
<style scoped lang='css' src='-t.css'>
</style>
```
### [name].css

```
.container {
  
}
```