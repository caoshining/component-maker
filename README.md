# mn-component-maker

the cli to create react components

[中文版](https://github.com/caoshining/component-maker/blob/master/README-zh.md)

## v1.2.8

support `css`,`scss`,`less`

## support

1. the cli to create react components
2. support create multiple components
3. support `css`,`Scss`,`Less`
4. support stateless function(or you can say pure component)
### Usage

###### React Component Creat
``` js
mkcomponent App
//you will create React component named App
mkcomponent Header,Body,Footer
//you will create React compoennts named Header,Body,Footer
```
###### Vue Component Creat
``` js
npm i -g mn-component-maker
mkcomponent -l Body -t vue
```

#### create component with Scss
``` js
mkcomponent -s Body
//create React components named Body with Scss
```
#### create React component with Less
``` js
mkcomponent -l Body
//create React components named Body with Less
```

#### create React component with Less
```
mkcomponent -p Body
//you will create pure component for stateless function
```

#### create Vue component with stateless
``` js
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

``` js
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

```
<template>
  <div class="[name]">
        [name]
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