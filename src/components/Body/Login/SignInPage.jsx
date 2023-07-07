import React from 'react'
import Form from '../../../reusable/Form'
import Square from '../../../reusable/Square'
import Input from '../../../reusable/Input'
import Button from '../../../reusable/Button'
import { Link } from 'react-router-dom'

const SignInPage = () => {
  return (
    <div className='my-20 block'>
        <div className='flex justify-center'>
        </div>
       <div className=''>
       <Square className='top-32 right-24 w-20 h-20 z-10'/>
       <Square className='top-52 left-24 w-32 h-32'/>
       <Square className='-bottom-2 right-32 w-20 h-20'/>
       <Square className='top-64 right-20 w-14 h-14'/>
       <Square className='-bottom-5 left-32 w-16 h-16 z-10'/>
       <Square className='top-24 left-96 w-24 h-24 z-10'/>
       <Square className='-bottom-20 right-96 w-32 h-32'/>
       </div>
       <div className='flex justify-center'>
       <Form className="w-fit p-10 md:w-2/3 flex justify-center">
           <div className='flex flex-col w-full justify-center gap-y-8 tracking-wider'>
           <h1>Login Form</h1>
              {/* <label>Email</label> */}
              <Input placeholder='Your Email' className=''/>
              {/* <label>Password</label> */}
              <Input placeholder='Password'/>
              <Button className="flex justify-center rounded-md backdrop-opacity-10 backdrop-blur bg-pink-400 border-none hover:bg-yellow-200">Login</Button>
              <div>
                <p>Forgot Password ?<Link to='/forgot-pw' className='underline'>Click Here</Link></p>
                <p>Don't have an account? <Link to='/sign-up' className='underline'>Sign up</Link></p>
              </div>
           </div>
       </Form>
       </div>
    </div>
  )
}

export default SignInPage