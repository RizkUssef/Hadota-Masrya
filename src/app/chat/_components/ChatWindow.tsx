import React from 'react'
import ChatHeader from './ChatHeader'
import EmptyMessageList from './EmptyMessageList'
import MessageList from './MessageList'

const ChatWindow = () => {
  return (
    <div className=' flex-1 mr-10 w-full'> 
      <ChatHeader />
      {/* <EmptyMessageList /> */}
      <MessageList />
    </div>
  )
}

export default ChatWindow
