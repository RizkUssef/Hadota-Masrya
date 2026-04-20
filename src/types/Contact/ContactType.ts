export interface ContactUser {
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

export interface ContactUserItemData {
  id: string;
  uuid: string;
  user_id: string;
  contact_id: string;
  contact: ContactUser;
  user: ContactUser;
  nickname: string;
  is_favorite: boolean;
  created_at: Date;
  updated_at: Date;
}
