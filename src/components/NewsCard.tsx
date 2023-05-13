import { motion } from 'framer-motion'
import type { article } from './NewsFeed'

type articleProps = {
  article: article
}

type options = {
  [option: string]: string
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}


  const altUrlToImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH76uwv2y3PFV2fO4qxdtkDZD5Ev1T8KDRxA&usqp=CAU'

export default function NewsCard({article}: articleProps) {
  const {title, author, publishedAt, urlToImage, url, source,} = article

  function formatDate(publishedAt: (string|null|undefined)) {
    if (publishedAt === null || publishedAt === undefined) {
      return null
    }

    const date = new Date(publishedAt);
    const options : options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate.toString();
  }

  
  return (
    <motion.section
      className="bg-[rgb(25,167,206)] min-w-[300px] max-w-[400px] w-[80%] aspect-[9/12] mx-auto my-2 rounded-lg px-4 py-4 shadow-lg drop-shadow-lg flex flex-col relative"
      variants={item}
    >
      <div className='bg-[#AFD3E2] px-2 py-2 rounded-lg drop-shadow-md overflow-x-hidden overflow-y-auto h-[45%]'>
        <h3 className='font-semibold lg:text-lg text-md mb-2'>
          {title}
        </h3>
        <h2 className='font-semibold'>
          {author}
        </h2>
        <h2 className='font-semibold text-sm'>
          {source?.name}
        </h2>
        <p className='opacity-70 text-sm'>
          {formatDate(publishedAt)}
        </p>
      </div>

      <div className='mt-auto max-w-[100%] h-[50%] flex justify-center items-center'>      
        <a href={url} target='_blank' className='w-[100%] h-[100%] mx-auto relative'>
          <img 
            src={urlToImage || altUrlToImage} 
            loading='lazy' 
            className='w-[100%] h-[100%] object-cover rounded-lg shadow-lg drop-shadow-md'            
          />
          <motion.div
            className='bg-black w-[100%] h-[100%] absolute top-0 left-0 rounded-lg'
            initial={{opacity: 0.25}}
            whileHover={{opacity: 0}}
          />
        </a>
      </div>
    </motion.section>
  )
}