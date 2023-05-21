import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleCars from './cars/SingleCars';
import SingleTruks from './truks/SingleTruks';
import PoliceCartDtails from './police/PoliceCartDtails';

const ShopeByCatagory = () => {
    const [cars, setCars] = useState([])
    const [trucks, setTracks] = useState([])
    const [polices,setPolices] = useState([])
    useEffect(() => {
        fetch('https://wheels-and-deals-server-side.vercel.app/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
   

    useEffect(() => {
        fetch('https://wheels-and-deals-server-side.vercel.app/truks')
            .then(res => res.json())
            .then(data => setTracks(data))
            .catch(err => console.error(err))
    }, [])
    useEffect(() => {
        fetch('https://wheels-and-deals-server-side.vercel.app/police')
            .then(res => res.json())
            .then(data => setPolices(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className='bg-gray-300'>
            <h1  data-aos="fade-up" className='text-center text-black font-bold text-4xl py-11'>this is our shope by catagory section</h1>
            <div >
                <Tabs  data-aos="fade-up" className={'text-white'}>
                    <TabList className={'text-4xl text-center'}>
                        <Tab className={'btn btn-error mx-4 text-white'}>sports car</Tab>
                        <Tab className={'btn btn-error mx-4 text-white'}>truck</Tab>
                        <Tab className={'btn btn-error mx-4 text-white'}> mini police car</Tab>
                    </TabList>

                  <div >
                  <TabPanel data-aos="fade-left">
                        <div className='grid lg:grid-cols-3 gap-4 pt-12 pb-20 '>
                            {
                                cars.map(car => <SingleCars
                                    key={car._id}
                                    car={car}
                                ></SingleCars>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel data-aos="fade-left">
                        <div className='grid lg:grid-cols-3 gap-4 mt-4 pt-12 pb-20 '>
                            {
                                trucks.map(truck =><SingleTruks 
                                key={truck._id}
                                truck={truck}
                                ></SingleTruks>)
                            }
                        </div>
                    </TabPanel >
                    <TabPanel data-aos="fade-left">
                        <div className='grid lg:grid-cols-3 gap-4 mt-4 pt-12 pb-20 '>
                            {
                                polices.map(police =><PoliceCartDtails 
                                key={police._id}
                                police={police}
                                ></PoliceCartDtails>)
                            }
                        </div>
                    </TabPanel>
                  </div>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopeByCatagory;