


import Image from 'next/image'
export default function Header2(){

    return(

        <div>

<div className='h-[124px]  leading-[100px] border-[1px] relative'>


<p className='md:ml-[1280px]  gap-5 mt-[40px] absolute hidden md:flex'>
        <Image src='/images/icons/heart.PNG' alt='#' width={25} height={25} />
        <Image src='/images/icons/bell.PNG' alt='#' width={30} height={30} />
        <Image src='/images/icons/setting.PNG' alt='#' width={25} height={25} />
        <Image src='/images/icons/profile.PNG' alt='#' width={35} height={35} />
    </p>


    <p> <span className='md:mx-[60px] text-[44px] text-[#3563E9] font-bold'>MORENT</span>
    <input className='h-[50px] md:w-[400px] w-[200px] rounded-full border-[1px]' type="text" name="search"  placeholder=' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; search something there'/> 
    <Image className='md:mx-[320px] ml-[200px] my-[-60px]' src='/images/icons/search.PNG' alt='search' height={20} width={20}/>
    </p>

    
</div>

</div>

)

}