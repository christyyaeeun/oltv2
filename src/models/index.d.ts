import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ContentType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO"
}



type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TimelineMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Comment {
  readonly id: string;
  readonly body?: string | null;
  readonly user?: User | null;
  readonly timelineID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly commentUserId?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class User {
  readonly id: string;
  readonly username?: string | null;
  readonly profilePic?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class Timeline {
  readonly id: string;
  readonly description?: string | null;
  readonly postTime?: string | null;
  readonly author?: User | null;
  readonly content?: Content | null;
  readonly comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly timelineAuthorId?: string | null;
  readonly timelineContentId?: string | null;
  constructor(init: ModelInit<Timeline, TimelineMetaData>);
  static copyOf(source: Timeline, mutator: (draft: MutableModel<Timeline, TimelineMetaData>) => MutableModel<Timeline, TimelineMetaData> | void): Timeline;
}

export declare class Content {
  readonly id: string;
  readonly source?: string | null;
  readonly type?: ContentType | keyof typeof ContentType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Content, ContentMetaData>);
  static copyOf(source: Content, mutator: (draft: MutableModel<Content, ContentMetaData>) => MutableModel<Content, ContentMetaData> | void): Content;
}