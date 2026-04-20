export interface Conversation {
  uuid: string;
  type: string;
  name: string;
  description: string;
  avatarUrl: string;
  members?: ConversationMemeber[]; // For conversations
  otherUsers?: ConversationMemeber[]; // For one-on-one conversations
  createdBy: string;
  lastMessageId: string;
  lastActivityAt: Date;
  isArchived: boolean;
}

export interface ConversationMemeber {
  conversation_id: string;
  user_id: string;
  user: ConversationUser;
  role: string;
  nickname: string;
  is_muted: boolean;
  muted_until: Date;
  is_pinned: boolean;
  unread_count: number;
  last_read_at: Date;
  last_read_message_id: string;
  joined_at: Date;
  left_at: Date;
  invited_by: string;
}
export interface ConversationUser {
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

export interface ConversationUserItemData {
  id: string;
  uuid: string;
  user_id: string;
  contact_id: string;
  contact: ConversationUser;
  user: ConversationUser;
  nickname: string;
  is_favorite: boolean;
  created_at: Date;
  updated_at: Date;
}
