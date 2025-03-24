export type Role = "admin" | "moderator" | "user";

export type User = {
  blockedBy: string[];
  roles: Role[];
  id: string;
};
