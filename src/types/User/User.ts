export interface User {
  uuid: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  displayName: string;
  avatarUrl: string; //avatar_url,
  bio: string;
  status: string;
  isOnline: boolean;
  lastSeenAt: Date;
  emailVerifiedAt: Date;
}
