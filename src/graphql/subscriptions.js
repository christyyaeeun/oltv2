/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      body
      user {
        id
        username
        profilePic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      timelineID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      commentUserId
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      body
      user {
        id
        username
        profilePic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      timelineID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      commentUserId
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      body
      user {
        id
        username
        profilePic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      timelineID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      commentUserId
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String) {
    onCreateTodo(owner: $owner) {
      id
      name
      description
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String) {
    onUpdateTodo(owner: $owner) {
      id
      name
      description
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String) {
    onDeleteTodo(owner: $owner) {
      id
      name
      description
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateTimeline = /* GraphQL */ `
  subscription OnCreateTimeline($owner: String) {
    onCreateTimeline(owner: $owner) {
      id
      description
      postTime
      author {
        id
        username
        profilePic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      content {
        id
        source
        type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      comments {
        items {
          id
          body
          timelineID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          commentUserId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      timelineAuthorId
      timelineContentId
      owner
    }
  }
`;
export const onUpdateTimeline = /* GraphQL */ `
  subscription OnUpdateTimeline($owner: String) {
    onUpdateTimeline(owner: $owner) {
      id
      description
      postTime
      author {
        id
        username
        profilePic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      content {
        id
        source
        type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      comments {
        items {
          id
          body
          timelineID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          commentUserId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      timelineAuthorId
      timelineContentId
      owner
    }
  }
`;
export const onDeleteTimeline = /* GraphQL */ `
  subscription OnDeleteTimeline($owner: String) {
    onDeleteTimeline(owner: $owner) {
      id
      description
      postTime
      author {
        id
        username
        profilePic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      content {
        id
        source
        type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      comments {
        items {
          id
          body
          timelineID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          commentUserId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      timelineAuthorId
      timelineContentId
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      username
      profilePic
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      username
      profilePic
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      username
      profilePic
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateContent = /* GraphQL */ `
  subscription OnCreateContent($owner: String) {
    onCreateContent(owner: $owner) {
      id
      source
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateContent = /* GraphQL */ `
  subscription OnUpdateContent($owner: String) {
    onUpdateContent(owner: $owner) {
      id
      source
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteContent = /* GraphQL */ `
  subscription OnDeleteContent($owner: String) {
    onDeleteContent(owner: $owner) {
      id
      source
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
