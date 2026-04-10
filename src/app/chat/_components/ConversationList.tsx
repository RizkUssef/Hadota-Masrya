import React from 'react'
import OneUser from './OneUser'
import Search from './Search'


const ConversationList = () => {
  return (
    <div className="bg-cards-bg flex flex-col w-90 justify-start gap-3 rounded-2xl h-all-components-height mt-20 pb-5">
      <Search />
      <OneUser hasUnseenMessages={true} />
      <OneUser />
    </div>
  )
}

export default ConversationList
