// import { useGetAllNewsQuery, useGetTopHeadLinesQuery } from './features/apiSlice/newsApi'
import { motion } from 'framer-motion'


import NewsFeed from './components/NewsFeed'

import './App.css'

function App() {
  




  

  return (
  <>
    <motion.header 
      className='mx-auto text-3xl mt-8 font-bold bg-[#146C94] text-[#F6F1F1] px-3 py-2 rounded-xl drop-shadow-lg shadow-lg'
      initial={{y: '-50vh'}}
      animate={{y: 0}}
      whileHover={{scale: 1.05 }}
      transition={{y: {duration: 1}, scale: {duration: 0.1}}}      
    >
      News Aggregator
    </motion.header>
    <NewsFeed />
  </>
  )
}

export default App
