import { useForm } from 'react-hook-form';

const PersonalDetails = ({ data, setData, step, setStep }) => {
    const {register, watch, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            // dob: data.dob,
            // age: data.age
            // phno: data.phno
        }
    });

    const [dob, age, phno] = watch(['dob', 'age', 'phno']);
    // console.log(watch('dob'));

    const onSubmit = () => {
        setData({...data, dob, age, phno})
        console.log(data)
        setStep(step + 1)
    };

    return (
    <form className='personal-details' onSubmit={handleSubmit(onSubmit)}>
        <h1>Personal Details</h1>
        <input {...register("dob", { required: true })} type="date" placeholder="Date of Birth" />
        {errors.dob && <span>DOB is required!</span>}
        <input {...register("age", { required: {value: true, message: "Age is required!"}, pattern: {value: /^(1[89]|[2-9]\d)$/, message: "Enter valid age!"} })} type="number" placeholder="Age" />
        {errors.age && <span>{errors.age.message}</span>}
        <input {...register("phno", { required: {value: true, message: "Phone number is required!"}, pattern: {value: /^\d{10}$/, message: "Enter valid phone number!"} })} type="number" placeholder="Phone Number" />
        {errors.phno && <span>{errors.phno.message}</span>}
        <div>
            <button onClick={() => {setStep(step - 1)}}>Prev</button>
            <button type='submit'>Submit</button>
        </div>
    </form>
    );
}

export default PersonalDetails;