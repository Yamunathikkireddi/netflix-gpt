import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
<div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
<img alt= "logo"  className='w-44'
src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"></img>
{user && <div className='flex'>
<img alt="usericon" className='w-12 h-12'
src="https://occ-0-4747-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQnmeaepsU0lnxoTdpNiro7EgxPPliAQLvYpmam8nLmS_vxrck8TPiA_PGdvdlUqX3CjPmcxgOFdWfCM8Y_ttt5uEzyeA7c.png?r=229"></img>
<button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
 </div>
}
 </div>
  )
}

export default Header