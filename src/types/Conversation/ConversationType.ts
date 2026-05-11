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
  conversationId: string;
  userId: string;
  user: ConversationUser;
  role: string;
  nickname: string;
  isMuted: boolean;
  mutedUntil: Date;
  isPinned: boolean;
  unreadCount: number;
  lastReadAt: Date;
  lastReadMessageId: string;
  joinedAt: Date;
  leftAt: Date;
  invitedBy: string;
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
  userId: string;
  contactId: string;
  contact: ConversationUser;
  user: ConversationUser;
  nickname: string;
  isFavorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}
