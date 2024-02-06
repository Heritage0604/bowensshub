'use client'
import React from 'react'
import Card from './components/Card'
import Image from 'next/image'
import {auth} from "@/firebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import {User} from "firebase/auth"

const Index = () => {

    const router=useRouter()
  const [user, loading, error] = useAuthState(auth);

  useEffect(()=>{
        if(user){
            router.push('/dashboard')
        }
    },[user,router])
  return (
    <div className=' gap-8 flex-wrap  flex flex-col lg:flex-row mt-10 pl-40 lg:pl-52'>
        <Card label="Course Registration" color='red' />
        <Card label="Hostel Management" color='blue'/>
        <Card label="Result Processing" color='slate'/>
        <Card label="Profile" color='blue'/>
        <Card label="Payment" color='sate' />
        <Card label="My Courses" color='red'/>
        <Card label="Bowen Anthem" color='slate' />
        <Card label="Student Handbook"  color='red'/>
        <Card label="BBSF Election" color='blue'/>
    </div>
  )
}

export default Index