// import React, { useState } from 'react'
// import Add from '../components/Add'
// import View from '../components/View'
// import Category from '../components/Category'
// import { Link } from 'react-router-dom'


// function Home() {

//   // create state to do state-lifting
//   const [uploadVideoStatus , setUploadVideoStatus] = useState({})
//   return (
//     <>
//     <div className='mt-5 mb-5'>
//       <div className='mt-3 mb-3 d-flex align-items-center justify-content-center  w-100'>
//           <Add setUploadVideoStatus={setUploadVideoStatus}/>
//       </div>
//       <Link to={'/watch-history'} style={{textDecoration:'none' ,color:'white', fontSize:'30px'}}>Watch History</Link>
//       <div className='container-fluid d-flex justify-content-between'>
//         <div className='all-videos col-lg-9'>
//           <h4 className='mb-5'>All Videos</h4>
//           <View uploadVideoStatus={uploadVideoStatus}/>
//         </div>
//         <div className='category col-lg-9'>
//       <Category/>
//       </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Home



import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'


function Home() {
  const [uploadVideoStatus , setUploadVideoStatus] = useState({})

  return (
    <div className='mt-5 mb-5'>
      <div className='mt-3 mb-3 d-flex align-items-center justify-content-center  w-100'>

      <Add setUploadVideoStatus={setUploadVideoStatus}/>
      </div>
      <div className='container-fluid d-flex justify-content-between'>
      <View uploadVideoStatus={uploadVideoStatus}/>
      <div className="category col-lg-3">
      <Category/>

      </div>
    </div>
    </div>
  )
}

export default Home