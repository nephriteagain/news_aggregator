
import { motion } from 'framer-motion'
import { useState } from 'react'

import NewsFeed from './components/NewsFeed'
import NewsFilter from './components/NewsFilter'
import type { params } from './lib/queryHelper'

import './App.css'

function App() {
  const [ queryParams, setQueryParams ] = useState<params>({country: 'us'})

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
    <NewsFilter queryParams={queryParams} setQueryParams={setQueryParams} />
    <NewsFeed queryParams={queryParams} />
  </>
  )
}

export default App
