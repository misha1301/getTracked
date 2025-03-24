import { Todo } from "./Todo";
import { Comment } from "./Comment";
import { Role, User } from "./User";

export type Permissions = {
  comments: {
    dataType: Comment;
    action: "view" | "create" | "update";
  };
  todos: {
    dataType: Todo;
    action: "view" | "create" | "update" | "delete";
  };
};

export type PermissionCheck<Key extends keyof Permissions> =
  | boolean
  | ((user: User, data: Permissions[Key]["dataType"]) => boolean);

export type RolesWithPermissions = {
  [R in Role]: Partial<{
    [Key in keyof Permissions]: Partial<{
      [Action in Permissions[Key]["action"]]: PermissionCheck<Key>;
    }>;
  }>;
};
