import React from 'react'

const RightSideBar = ({user, transactions, banks}: RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
      <section className='flex flex-col pb-8'>
        <div className='profile-banner'/>
        <div className='profile'>
          <div className='profile-img'>
            <span className='text-5xl font-bold'>{user.firstname[0]}</span>
          </div>
        </div>
      </section>
    </aside>
  )
}

export default RightSideBar
