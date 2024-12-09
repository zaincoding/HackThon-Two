import Image from 'next/image'
import Body from '@/components/Category/Header/Body2/Body2'

export default function Header(){

    return(

        <div>


<div className='bg-[#F6F7F9]'>

<div className='md:ml-[100px] md:flex ml-[50px]'>
      <p>
      <Image className='md:hidden mt-[10px]' src='/images/banners/Ads 1.PNG' alt='asd1' width={400} height={100}/>

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

        <Image className='md:hidden' src='/images/banners/Ads 2.PNG' alt='asd1' width={400} height={200}/>

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