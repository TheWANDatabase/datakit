## Schema - DataKit

### Table `cast_credits`

This table is used to store the credits for a given cast member. It is a central table that links a cast member to a
role at the time of production, as well as a specific episode.

#### Import

```js
import {credits} from 'datakit';
```

| Column      | Type    | Nullable | Default                                  | Description                                             |
|-------------|---------|----------|------------------------------------------|---------------------------------------------------------|
| id          | integer | false    | nextval('cast_credits_id_seq'::regclass) | Unique ID                                               |
| cast_id     | integer | false    | N/A                                      | The cast member                                         |
| position_id | integer | false    | N/A                                      | The role that the person had at the time the show aired |
| episode_id  | integer | false    | N/A                                      | The episode that the person appeared in                 |

### Table `cast_jobs`

This table is used to store the credits for a given cast member. It is a central table that links a cast member to a
role at the time of production, as well as a specific episode.

#### Import

```js
import {credits} from 'datakit';
```
