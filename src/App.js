import React from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
  const {register, formState: { errors }, handleSubmit} = useForm()
  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
  }

  return (
    <div className='app'>
      <form className='form-one' onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username", { required: true })} type="text" placeholder="Username" />
        {errors.username && <span>This field is required!</span>}
        <input {...register("password", { required: true })} type="password" placeholder="Password" />
        {errors.password && <span>This field is required!</span>}
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
