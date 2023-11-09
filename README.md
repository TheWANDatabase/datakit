# DataKit

Helper library built around node-postgres and the [drizzle ORM](https://orm.drizzle.team). Assembled to provide a
consistent library to synchronize all of the data schemas across the various services that make up the project.


## Usage

```javascript
import { Client } from 'datakit';

const client = new Client();

// Do Stuff!
```

It really is as simple as that. For more detailed documentation, see the [Schema Documentation](./docs/schema.md).