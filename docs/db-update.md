# DB.update()

## Syntax
```js
DB.update( index, data[, eraseEmpty, callback] );
```

## Arguments
#### `index`
Which record to update. If DB.records[index] does not exist, the function will return an error.

#### `data`
The data to write to the database. See `overwrite` for more writing behavior.

#### `eraseEmpty`
Whether the data will overwrite existing data. Equal to `false` by default. The following table explains the writing behavior best:

| `data`   | `record` | `eraseEmpty` | Result |
|----------|----------|--------------|--------|
| `true`   | `true`   | `true`       | `record.foo` is overwritten by `data.foo`. |
| `false`  | `true`   | `true`       | **`record.foo` is erased.** |
| `true`   | `false`  | `true`       | `record.foo` is created. |
| `true`   | `true`   | `false`      | `record.foo` is overwritten by `data.foo`. |
| `false`  | `true`   | `false`      | **`record.foo` is ignored.** |
| `true`   | `false`  | `false`      | `record.foo` is created. |
