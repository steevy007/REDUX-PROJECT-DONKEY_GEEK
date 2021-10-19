import React, { useState } from 'react'
import Image from '../../components/Image/Image'
import ImgPhone from '../../assets/images/kWcJaVDKbrd548xLhKfWcc.jpg'
import Button from '../../components/Button/Button'
import InfoCard from '../../components/InfoCard/InfoCard'
import { buy_phone } from '../../redux/phone/Action/Action'
import { useSelector, useDispatch } from 'react-redux'
import Input from '../../components/input/Input'
const Phone = () => {
    const phones = useSelector(state => state.phone.phones)
    const dispatch = useDispatch()
    const [quantite, setQuantite] = useState(1)

    const handleChange = (event) => {
        const target = event.target
        setQuantite(target.value)
        console.log(quantite)
    }

    return (
        <div className='col-4 border m-2 p-2'>
            <Image src={ImgPhone} css='img-fluid ' alt='Image Phone' />
            <InfoCard id="count_phone" value={phones} />
            <Input placeholder='saisir quantite' type='text' value={quantite} handleChange={(event) => handleChange(event)} />
            <Button block={true} css='btn-dark btn-block ' click={() => dispatch(buy_phone(quantite))} text='ACHETER' />
        </div>
    )
}

/*const  mapStateToProps = (state, ownProps) => {
    return {
        phones:state.phones
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buy_phone: () => {
            dispatch(buy_phone())
        }
    }
}*/
//export default connect(mapStateToProps,mapDispatchToProps)(Phone)
export default Phone
