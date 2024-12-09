import Header2 from '@/components/Category/Header2'
import Payment from '@/components/Payment/Payment'
import Rental from '@/components/Payment/Rental/Rental'

export default function PaymentPage(){

    return(


        <div>

            <div>
                <Header2/>

            <div className='flex'>    
                <Payment/>
                <Rental/>
            </div>
            </div>
        </div>
    )
}