import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Form = () => {
    const [photo, setPhoto] = useState()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [story, setStory] = useState('')
    const [customer, setCustomer] = useState(false)
    const [vendor, setVendor] = useState(false)
    const [student, setStudent] = useState('')

    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

        const formData = { photo, firstName, lastName, story, customer, vendor, student }

        fetch('http://localhost:8000/data', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(() => console.log(formData))
        .catch(error => console.log(error.message))


        setPhoto('')
        setFirstName('')
        setLastName('')
        setStory('')
        setCustomer(false)
        setVendor(false)
        setStudent('')

        history.push('/greet');

    }


    return (
        <div className="w-2/5 mx-auto rounded-md bg-orange-200 p-10 sm:w-full">
            <form onSubmit={handleSubmit} action="">
                <h1 className="text-3xl font-bold my-5 mx-auto text-center">Share your amazing story!</h1>
                <div className="upload my-3 mx-0">
                    <label className="block mb-2 font-semibold">Upload your Picture</label>
                    <input className="block w-full" type="file" accept="image/*" name="" id="" />
                </div>
                <div className="flex justify-between items-center my-3 mx-0 sm:flex-col">
                    <div className="firstName w-1/2 mr-1 sm:w-full sm:my-3">
                        <label className="block mb-2 font-semibold">First Name</label>
                        <input className="block p-2 rounded-md sm:w-full" type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className="lastName w-1/2 sm:w-full">
                        <label className="block mb-2 font-semibold">Last Name</label>
                        <input className="block p-2 rounded-md sm:w-full" type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
                    </div>
                </div>
                <div className="upload my-3 mx-0">
                    <label className="block mb-2 font-semibold">Share your story</label>
                    <textarea className="block w-full rounded-md p-2" name="" id="" cols="30" rows="5" value={story} onChange={e => setStory(e.target.value)}></textarea>
                </div>
                <div className="upload my-3 mx-0">
                    <label className="font-semibold mr-4">What did you interact with Vasiti as?</label>
                    <input className="mr-1" type="radio" name="customer" id="customer" checked={customer} onChange={e => setCustomer(e.target.checked)}/>
                    <label className="font-semibold mr-2">Customer</label>
                    <input className="mr-1" type="radio" name="vendor" id="vendor" checked={vendor} onChange={e => setVendor(e.target.checked)}/>
                    <label className="font-semibold mr-2">Vendor</label>
                </div>
                <div className="upload my-3 mx-0">
                    <label className="block mb-2 font-semibold">City or Higher Institution (for Students)</label>
                    <textarea className="block w-full rounded-md p-2" name="students" id="" cols="30" rows="2" value={student} onChange={e => setStudent(e.target.value)}></textarea>
                </div>
                <button className="upload block w-3/5 mt-10 mx-0 text-white text-2xl font-semibold p-3 rounded-md bg-navlink">Share your story!</button>
            </form>
        </div>
    )
}

export default Form
