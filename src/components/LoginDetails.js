import { useForm } from 'react-hook-form';

const LoginDetails = ({ data, setData, step, setStep }) => {
    const {register, watch, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            // username: data.username,
            // password: data.password
        }
    });

    const [username, password] = watch(['username', 'password']);

    const onSubmit = () => {
        setData({...data, username, password})
        setStep(step + 1)
    };

    return (
    <form className='login-details' onSubmit={handleSubmit(onSubmit)}>
        <h1>Login Form</h1>
        <input {...register("username", { required: true })} type="text" placeholder="Username" />
        {errors.username && <span>Username is required!</span>}
        <input {...register("password", { required: true })} type="password" placeholder="Password" />
        {errors.password && <span>Password is required!</span>}
        <button type='submit'>Next</button>
    </form>
    );
}

export default LoginDetails;