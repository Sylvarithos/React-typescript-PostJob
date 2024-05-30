import React from "react"

interface ServiceImageProps {
  content: string,
  src: string,
  alt: string
}

const ServiceImage: React.FC<ServiceImageProps> = ({ src, alt, content }) => {
  return <>
    <div>
      <img src={src} className='h-[261px] rounded-lg border-slate-300 border-[0.5px]' alt={alt} width={'100%'}></img>
      <div className='font-bold text-3xl pt-5'>{alt} </div>
      <hr className='mt-3 border-t-[1px] border-slate-400	' />
      <div className=' text-xl py-2'>{content}</div>
    </div>
  </>
}

export default ServiceImage