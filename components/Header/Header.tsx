import Image from 'next/image'
import Body from '@/components/Header/Body/Body'

export default function Header(){

    return(

        <div>

<div className='h-[124px]  leading-[100px] border-[1px] relative'>


<p className='md:ml-[1080px]  gap-5 mt-[40px] absolute hidden md:flex'>
        <Image src='/images/icons/heart.PNG' alt='#' width={25} height={25} />
        <Image src='/images/icons/bell.PNG' alt='#' width={30} height={30} />
        <Image src='/images/icons/setting.PNG' alt='#' width={25} height={25} />
        <Image src='/images/icons/profile.PNG' alt='#' width={35} height={35} />
    </p>


    <p> <span className='md:mx-[60px] text-[44px] text-[#3563E9] font-bold'>MORENT</span>
    <input className='h-[50px] w-[400px] rounded-full border-[1px]' type="text" name="search"  placeholder=' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; search something there'/> 
    <Image className='md:mx-[320px] ml-[200px] my-[-60px]' src='/images/icons/search.PNG' alt='search' height={20} width={20}/>
    </p>

    
</div>


<div className='bg-[#F6F7F9]'>
      <div className=' md:flex  gap-[100px] ml-[60px] my-[20px] hidden'>
        <Image src='/images/banners/Ads 1.png' alt='asd1' width={600} height={200}/>
        <Image src='/images/banners/Ads 2.png' alt='asd1' width={600} height={200}/>



      </div>
<div className='md:ml-[100px] md:flex ml-[50px]'>
      <p>
      <Image className='md:hidden mt-[10px]' src='/images/banners/Ads 1.png' alt='asd1' width={400} height={100}/>

            <input type="radio" id="pic" name='pic'/>
            <label> Pick-Up</label><br/>

<span className='flex gap-[130px]'><label>Location</label> <label>Date</label>  <label>Time</label></span><br/>
            <select>
            <option value='1'>Select your location</option>
            <option value='1'>Tower</option>
            <option value='2'>Defance</option>
            <option value='3'>Clifton</option>
            <option value='4'>Saddar</option>

            </select>
            
         <input type='date' placeholder='select your date'/>  

         <input type='time' placeholder='select time'/>

        </p>

        <p className=' md:ml-[350px]'>

        <Image className='md:hidden' src='/images/banners/Ads 2.png' alt='asd1' width={400} height={200}/>

            <input type="radio" id="pic" name='pic'/>
            <label> Drop-Off</label><br/>

<span className='flex gap-[130px]'><label>Location</label> <label>Date</label>  <label>Time</label></span><br/>
            <select>
            <option value='1'>Select your location</option>
            <option value='1'>Tower</option>
            <option value='2'>Defance</option>
            <option value='3'>Clifton</option>
            <option value='4'>Saddar</option>

            </select>
            
         <input type='date' placeholder='select your date'/>  

         <input type='time' placeholder='select time'/>

        </p>


</div>
</div>

<Body/>

        </div>
    )
}