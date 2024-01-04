import React from 'react'
import m from '../assets/Logo.png'
import p from '../assets/aboutFig.jpg'
import Nav from './Nav';
import cars from  '../assets/Cars.png'

export default function About() {
  return (
    <>

      

    <div className='w-full h-[80vh] max-sm:h-[80vh]  bg-[#f5f5f5] mt-2 '>
      
        <div className='w-auto h-[46vh] max-sm:h-[46%]  flex justify-around items-center  '>
            <div className=' h-auto w-auto flex flex-col justify-center gap-2 font-bold text-lg '>
                <hr className='w-[60%] max-sm:w-[60%]  bg-[#e3c22da1] h-2 rounded-lg  '></hr> 
                <p>تعرف علينا </p>
            </div>
            <div className='p- text-center h-auto  max-sm:w-[60%] ' >
                <p className='pt-6'> فريق موقع "[ ركنة  ]"،  ونهدف إلى تغيير وايجاد حلول متمكنة مع مشكلات  </p>
                <p className='pt-2'> البحث عن مواقف السيارات. نعلم جيدًا أن العثور على المواقف القريبة من   </p>
                <p className='pt-2'> المستشفيات أو الوجهات المهمة يمكن أن تكون أمرًا صعبًا ومرهقًا ويمكن</p>
                <p className='pt-2'>أن يؤثر على جدولك الزمني ومهمتك الحالية.</p>
            </div>
            

        </div>
 <div className='w-auto h-[40vh] max-sm:h-[62%]  bg-[#f0f0f0] flex justify-around items-center '>
  <div className=' text-center h-auto max-sm:h-[62%] w-auto max-sm:w-[60%]'>
    <p className='pt-6 h-auto w-auto'>تتيح لك منصتنا الاحترافية حجز موقفك بشكل مسبق بكل يسر وسهولة. بحيث</p>
    <p className='pt-2 h-auto w-auto'>يمكنك استعراض المواقف المتاحة واختيار الموقف الذي يناسب احتياجاتك.</p>
    <p className='pt-2 h-auto w-auto'>ومواعيدك ويمكنك أيضًا تحديد التاريخ والوقت الذي ترغب فيه بالحجز</p>
    <p className='pt-2 h-auto w-auto'>وبضغطة زر واحد ويسكون موقف سيارتك مؤمنًا بالفعل.</p>
  </div>
  <img className='w-[35%]   max-sm:w-[40%] max-sm:h-[50%] mb-8 rounded-md shadow-[16.0px_8.0px_16.0px_rgba(0,0,0,0.7)]' src={cars} alt="" />
</div>
</div>

    </>
  )
}
