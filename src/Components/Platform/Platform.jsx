import React from 'react'
import Join from './Join'
import PlatformTop from './PlatformTop'
const Platform = React.memo(() => {
  return (
    <div className='relative lg:px-4 lg:py-10 lg:p-10 z-40'>
      <Join />
      <PlatformTop />
    </div>
  )
})
export default Platform