import { motion, } from "framer-motion"
import { useGetTopHeadLinesQuery } from "../features/apiSlice/newsApi"


import NewsCard from "./NewsCard"
import NewsCardLoading from "./NewsCardLoading"
import type { params } from "../lib/queryHelper"

type paramProps = {
  queryParams: params
}

 export interface article {
  author?: string|null
  content?: string|null
  description?: string|null
  publishedAt?: string|null
  source?: {
    id?: string|null
    name?: string|null
  }
  title?: string|null
  url?: string
  urlToImage?: string|null
}

export default function NewsFeed({queryParams}: paramProps) {

  const { data,  isLoading, isSuccess, isError, refetch, isFetching } = useGetTopHeadLinesQuery(queryParams)
  console.log(data)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  }
  
  if (isLoading || isFetching) {
    return (
      <motion.div
        className="px-4 py-8 grid md:grid-cols-2 grid-cols-1 gap-0 bg-[#AFD3E2] mt-4 rounded-lg shadow-lg drop-shadow-lg"
        variants={container}
        initial='hidden'
        animate='show'
      >
      <NewsCardLoading />
      <NewsCardLoading />
      <NewsCardLoading />
      <NewsCardLoading />
      <NewsCardLoading />
      <NewsCardLoading />
      </motion.div>
    )
  }

  else if (isSuccess) {
    return (
      <motion.div 
      className="px-4 py-8 grid md:grid-cols-2 grid-cols-1 gap-0 bg-[#AFD3E2] mt-4 rounded-lg shadow-lg drop-shadow-lg"
      variants={container}
      initial="hidden"
      animate="show"
      >
        {data.articles.map((article: article, index: number) => {
          return (
            <NewsCard article={article} key={index}/>
          )
        })}
      </motion.div>
    )
  }

  else if (isError) {
    return (
      <div className="bg-[#AFD3E2] text-lg px-4 py-4 rounded-lg drop-shadow-lg shadow-lg mt-4">
        Something went wrong...        
        <button onClick={refetch}
          className="px-2 py-1 text-md block mt-2 bg-green-300 rounded-md drop-shadow-sm shadow-sm hover:scale-110 hover:bg-green-400 active:scale-95 transition-all duration-100"
        >
          Reload
        </button>
      </div>
    )
  }
  

  
  else {
    return (
      <div className="bg-[#AFD3E2] text-lg px-4 py-4 rounded-lg drop-shadow-lg shadow-lg mt-12">
        Something went wrong...        
        <button onClick={refetch}
          className="px-2 py-1 text-md block mt-2 bg-green-300 rounded-md drop-shadow-sm shadow-sm hover:scale-110 hover:bg-green-400 active:scale-95 transition-all duration-100"
        >
          Reload
        </button>
      </div>
    )
  }
}