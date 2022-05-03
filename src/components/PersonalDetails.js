import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const PersonalDetails = ({ data, setData }) => {
    const {register, watch, formState: { errors }} = useForm({
        defaultValues: {
            age: data.age
        }
    })

    console.log(data)

    useEffect(() => {
        const subscription = watch(({age}) => {
            setData({...data, age})
        });
        return () => subscription.unsubscribe();
    }, [watch, setData, data]);

    return (
    <form className='personal-details'>
        <h1>Personal Details</h1>
        <input {...register("age", { required: true })} type="number" placeholder="Age" />
        {errors.age && <span>Age is required!</span>}
    </form>
    )
}

export default PersonalDetails