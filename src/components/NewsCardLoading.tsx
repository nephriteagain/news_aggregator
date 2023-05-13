import { motion, AnimatePresence } from 'framer-motion'

function NewsCardLoading() {

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <AnimatePresence>
    <motion.section
      className="bg-[rgb(25,167,206)] min-w-[300px] max-w-[400px] w-[70%] aspect-[9/12] mx-auto my-2 rounded-lg px-4 py-4 shadow-lg drop-shadow-lg flex flex-col relative"
      variants={item}
      exit={{opacity: 0}}          
    >
      <div className='bg-[#AFD3E2] px-2 py-2 rounded-lg drop-shadow-md h-[40%]'>
        <h3 className='font-bold text-xl mb-2 h-6 bg-slate-400 w-[80%] rounded-md'/>                  
        <h2 className='font-semibold h-4 bg-stone-400 w-1/3 rounded-md mb-2'/>                  
        <p className='opacity-70 text-sm h-3 bg-zinc-400 w-1/6 rounded'/>            
      </div>
      <div className='mt-auto max-w-[100%] h-[50%] bg-blue-300 rounded-lg'/>      
      
    </motion.section>
    </AnimatePresence>
  )
}

export default NewsCardLoading