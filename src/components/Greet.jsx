import { Link } from 'react-router-dom'


const Greet = () => {
    return (
        <div className="h-screen w-2/5 mx-auto rounded-md bg-orange-200 p-10 sm:w-full">
            <div>
                <img className="block w-1/2 h-1/2 rounded mx-auto my-3 mb-12" src="images/dark-red-flowered-rose-free-png-download.png" alt="A Dark Rose Flower"/>
            </div>
            <h1 className="w-3/5 text-3xl text-center mx-auto my-3 font-bold">Thank you for sharing your story!</h1>
            <p className="w-4/5 text-center mx-auto my-3 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis voluptatem animi ipsam voluptates esse!</p>
            <Link className="block w-2/5 my-2 mx-auto px-3 py-1 text-2xl text-white text-center rounded-md bg-navlink" to='/'>Close</Link>
        </div>
    )
}

export default Greet
