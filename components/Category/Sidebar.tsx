import Header from '@/components/Category/Header/Header'
import Header2 from '@/components/Category/Header2'


export default function Sidebar(){

    return(


<div>
<Header2/>  

        <div className='flex'>

       <div className="w-[200px]  h-[1000px]  leading-[50px] ml-[10px]">
<p>Type</p>
<input type="radio" id="radio"/>
<span> Spot(10)</span><br/>
<input type="radio" id="radio"/>
<span> SUV(12)</span><br/>
<input type="radio" id="radio"/>
<span> MPV(16)</span><br/>
<input type="radio" id="radio"/>
<span> Sedan(20)</span><br/>
<input type="radio" id="radio"/>
<span> Coupe(14)</span><br/>
<input type="radio" id="radio"/>
<span> Hatchback(14)</span><br/>

<p className="mt-[50px]">Capacity</p>
<input type="radio" id="radio"/>
<span className='whitespace-nowrap'> 2 person(10)</span><br/>
<input type="radio" id="radio"/>
<span className='whitespace-nowrap'> 4 person(14)</span><br/>
<input type="radio" id="radio"/>
<span className='whitespace-nowrap'> 6 person(12)</span><br/>
<input type="radio" id="radio"/>
<span className='whitespace-nowrap'> 8 more(16)</span><br/>

</div>

<div>
<Header/>
</div>
</div>
        </div>
    )
}