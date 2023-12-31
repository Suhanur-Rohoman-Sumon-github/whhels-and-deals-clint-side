import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/Authprovider';
import SingleMyToy from './SingleMyToy';
import Swal from 'sweetalert2';
import UseTitle from '../../title/UseTitle';

const MyToyes = () => {
    const { user } = useContext(AuthContext)
    console.log(user.email)
    const [myToyes, setMyToyes] = useState([])
    const [sort, setSort] = useState(false)
    const [selectedData, setSelectedData] = useState(null);
    UseTitle('whhel and deel /my toy')

    useEffect(() => {
        fetch(`https://wheels-and-deals-server-side.vercel.app/mytoyes?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToyes(data))
    }, [])
    useEffect(() => {
        fetch(`https://wheels-and-deals-server-side.vercel.app/mytoyes?sort=${sort}`)
            .then(res => res.json())
            .then(data => setMyToyes(data))
    }, [sort])


    const handleButtonClick = (id) => {
        console.log(id)
        const selected = myToyes.find((entry) => entry._id == id);
        setSelectedData(selected);
    };
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://wheels-and-deals-server-side.vercel.app/mytoyes/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data =>{
                        console.log(data)
                        if (data.deletedCount > 0) {
                            const updatedData = myToyes.filter(myTo => myTo._id !== id)
                            setMyToyes(updatedData)
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }

    return (
        <div>
            <section>
                <img src="data:image/jpeg;base64,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" className='w-full blur-sm h-64' alt="" />
                <div className=""></div>
                <div className='absolute top-0 left-0 mt-64  opacity-70 w-full '>
                    <h1 data-aos="fade-left" className='text-5xl text-error text-center  ml-14 font-bold   absolute inset-0 '>My tyoes</h1></div>
            </section>
            <section className=' mx-auto'>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-error text-white my-4 m-1 ">Filter</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button className='btn btn-error text-white' onClick={() => setSort(true)}>descending </button ></li>
                        <li><button className='btn btn-error mt-4 text-white' onClick={() => setSort(false)}>ascending </button></li>
                    </ul>
                </div>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className='text-error'>
                                <th>delete</th>
                                <th>user name</th>
                                <th>price</th>
                                <th>Catagoty</th>
                                <th>sub catagory</th>
                                <th>availbale</th>
                                <th>dtails</th>
                                <th>update</th>
                            </tr>
                        </thead>
                        <tbody >
                            {/* row 1 */}
                            {
                                myToyes.map(myToy => <SingleMyToy
                                    key={myToy._id}
                                    myToy={myToy}
                                    handleButtonClick={handleButtonClick}
                                    selectedData={selectedData}
                                    handleDelete={handleDelete}
                                ></SingleMyToy>)
                            }
                        </tbody>

                    </table>
                </div>

            </section>
        </div>
    );
};

export default MyToyes;