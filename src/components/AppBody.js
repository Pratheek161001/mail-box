import React from 'react'
import Logincard from './loginPage'
import Mainmail from './Mainmail'
import Sidemenu from './Sidemenu'
import Inbox from './Inbox'

const AppBody = () => {
  return (
    <div style={{width:'100vw',height:'100vh'}}>
      <Sidemenu/>
      <Inbox/>
      {/* <Mainmail/> */}
    </div>
  )
}

export default AppBody