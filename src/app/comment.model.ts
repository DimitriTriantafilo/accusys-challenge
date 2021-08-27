export class Comment {
    constructor(
      public postId: string,
      public id: string,
      public name: string,
      public email: string,
      public body: string,
    ){};
  }