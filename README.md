# component-maker

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

```
npm i -g component-maker
cy-mkcomponent App
//you will create React component named App
cy-mkcomponent Header,Body,Footer
//you will create React compoennts named Header,Body,Footer
```

#### create component with Scss
```
cy-mkcomponent -s Body
//create React components named Body with Scss
```
#### create React component with Less
```
cy-mkcomponent -l Body
//create React components named Body with Less
```

#### create React component with Less
```
cy-mkcomponent -p Body
//you will create pure component for stateless function
```

## component details


- [name].jsx
- [name].css
- index.jsx

## file details

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
