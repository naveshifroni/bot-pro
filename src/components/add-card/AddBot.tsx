import { useState } from 'react';
import { Gender } from '../../features/cards/cardSlice';
import { Card, addCard } from '../../features/cards/cardSlice';
import { v4 } from 'uuid';
import { useAppDispatch } from '../../app/hooks';
import design from './AddBot.module.scss'

import Swal from 'sweetalert2';


const AddCard = () => {

   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [age, setAge] = useState(0);
   const [sensitive, setSensitive] = useState(false);
   const [funny, setFunny] = useState(false);
   const [smart, setSmart] = useState(false);//להחליף ל useref
   const [gender, setGender] = useState<Gender>('Robot');
   
   const dispatch = useAppDispatch();
    
 
  
  

  


  return (
    <>
  <div className={`d-flex card w-50 ${design.add}`}>
    
    <h3 className={design.title}> Create Your Own Home Made Friend </h3>

<hr />

<label htmlFor="name"> Name </label>
<input value={name} onChange={(e)=> setName(e.currentTarget.value)}/>
<br />
<label htmlFor="name"> Description </label>
<input value={description} onChange={(e)=> setDescription(e.currentTarget.value)}/>
<br />
<label htmlFor="name"> Name </label>
<input min='0' value={age} onChange={(e)=> setAge(+e.currentTarget.value)}/>
<br />
<label htmlFor="name"> Funny </label>
<input type='checkbox' checked={funny} onChange={(e)=> setFunny(e.currentTarget.checked)}/>
<br />
<label htmlFor="name">Smart </label>
<input type='checkbox' checked={smart} onChange={(e)=> setSmart(e.currentTarget.checked)}/>
<br />
<label htmlFor="name"> Sensitive </label>
<input type='checkbox' checked={sensitive} onChange={(e)=> setSensitive(e.currentTarget.checked)}/>
<br />
<label htmlFor="name"> Gender </label>
<select value={gender} name="Gender" id="gender" 
onChange={(e)=>{
  const gen = e.currentTarget.value as Gender;
  setGender(gen);
}}
>
  <option value="Male"> Male </option>
  <option value="Female"> Female </option>
  <option value="Androgyny"> Androgyny </option>
  <option value="Robot"> Robot </option>
</select>
<button onClick={()=>{
  const card:Card={
    id: v4(),
    name: name,
    description: description,
    img:'fdf',
    age: age,
    funny: funny,
    smart: smart,
    sensitive: sensitive,
    gender: gender
};
dispatch(addCard(card));
Swal.fire('success','','success');

}}> Add Card </button>
</div>
    </>
  )
}

export default AddCard