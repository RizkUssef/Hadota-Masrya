import React from 'react'
import ChatHeader from './ChatHeader'
import EmptyMessageList from '../empty-states/EmptyMessageList'
import MessageList from '../messages/MessageList'
import { Conversation } from '@/types/Conversation/ConversationType'
import { useConversationMessages } from '@/hooks/useMessages'


const ChatWindow = ({conversation}: {conversation: Conversation | null}) => {
  // console.log("selected conversation in chat window:", conversation);
    const {data: conversationMessages, refetch} = useConversationMessages({
    filters: {
      conversationId: { operator: "eq", value: conversation?.id },
    },
    relationships: ["reads"],
    enabled: conversation !== null, // Only fetch messages when a conversation is selected
  });

  console.log("oneUserConversation:", conversationMessages);
  return (
    <div className=' flex-1 mr-10 w-full'> 
      <ChatHeader conversation={conversation} />
      {/* <EmptyMessageList /> */}
      <MessageList conversationMessages={conversationMessages} />
    </div>
  )
}

export default ChatWindow
