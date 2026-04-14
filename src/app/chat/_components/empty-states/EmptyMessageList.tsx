import React from 'react'
import MessageInput from './MessageInput'

const EmptyMessageList = () => {
  return (
    <div className="bg-chat-bg relative flex flex-col flex-2 mr-10 justify-between py-5 gap-3 items-center rounded-b-2xl h-[calc(100vh-172px)] w-full">
      <h1 className="text-center text-links-danger">
        No Messages Yet, <br/>Start the conversation by sending a message
      </h1>
      <MessageInput/>
    </div>
  )
}

export default EmptyMessageList
