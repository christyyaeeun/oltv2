// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ContentType = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO"
};

const { Comment, User, Todo, Timeline, Content } = initSchema(schema);

export {
  Comment,
  User,
  Todo,
  Timeline,
  Content,
  ContentType
};