import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const LoginDetails = ({ data, setData }) => {
    const {register, watch, formState: { errors }} = useForm({
        defaultValues: {
            username: data.username,
            password: data.password
        }
    })

    useEffect(() => {
        const subscription = watch(({username, password}) => {
            setData({...data, username, password})
        });
        return () => subscription.unsubscribe();
    }, [watch, setData, data]);

    return (
    <form className='login-details'>
        <h1>Login Form</h1>
        <input {...register("username", { required: true })} type="text" placeholder="Username" />
        {errors.username && <span>Username is required!</span>}
        <input {...register("password", { required: true })} type="password" placeholder="Password" />
        {errors.password && <span>Password is required!</span>}
    </form>
    )
}

export default LoginDetails