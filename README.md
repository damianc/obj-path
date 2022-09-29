# `ObjPath`

Getting object property by a path string.

```
const obj = {
  foo: {
  bar: [10, 20, 30, 40]
  }
}

ObjPath(obj, 'foo.bar[1]')
// 20
```

```
const obj = {
  foo: {
    bar: [
      120,
      { baz: [{
        quux: 200
      }] }
    ]
  }
};

ObjPath(obj, 'foo.bar[1].baz[0].quux')
// 200
```

```
const obj = {
  foo: [1, 2, [3, 4]]
};

ObjPath(obj, 'foo[2][0]')
// 3
```