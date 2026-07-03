import React from 'react'
import SideBar from '../_components/sidebar'
//import StockChart from '../_components/stockchart'

const Dashboard = () => {
 return (
   <div className='h-screen flex'>
       <div className='w-1/5'>
           <SideBar />
       </div>
       <div className='w-4/5'>
           <div className='h-1/2 p-5'>
               Portfolio
           </div>
           <div className='h-1/2'>
               {/* <StockChart /> */}
           </div>
       </div>
   </div>
 )
}

export default Dashboard
