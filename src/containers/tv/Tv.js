import React,{useState} from 'react'
import ImageTv from '../../assets/images/71vZLIfj5yS._SL1500_.jpg'
import Image from '../../components/Image/Image'
import InfoCard from '../../components/InfoCard/InfoCard'
import Button from '../../components/Button/Button'
import { useSelector,useDispatch } from 'react-redux'
import { buy_tv } from '../../redux/tv/Action/Action'
import Input from '../../components/input/Input'
export default function Tv() {
    const tv=useSelector(state=>state.Tv.tv)
    const dispatch=useDispatch()
    const [quantite,setQuantite]=useState(1)

    const handleChange=(event)=>{
        const target=event.target
        setQuantite(target.value)
        console.log(quantite)
    }

    return (
        <div className='col-4 border m-2 p-2'>
            <Image src={ImageTv} css='img-fluid ' alt='Image Phone' />
            <InfoCard id="count_phone" value={tv} />
            <Input placeholder='saisir quantite' type='text' value={quantite} handleChange={(event)=>handleChange(event)} />
            <Button block={true} css='btn-dark btn-block ' click={()=>dispatch(buy_tv(quantite))} text='ACHETER' />
        </div>
    )
}
