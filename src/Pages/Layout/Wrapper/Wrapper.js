import React from 'react'
import Header from '../../../../src/Pages/Layout/Header/Header'

export default function Wrapper({children}) {
  return (
   <>
   <Header/>
   {children}
   </>
  );
}
