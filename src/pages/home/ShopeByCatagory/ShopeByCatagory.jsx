import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleCars from './cars/SingleCars';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SingleTruks from './truks/SingleTruks';
import PoliceCartDtails from './police/PoliceCartDtails';

const ShopeByCatagory = () => {
    const [cars, setCars] = useState([])
    const [trucks, setTracks] = useState([])
    const [polices,setPolices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5001/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    useEffect(() => {
        AOS.init({
            // Customize AOS options here
            // For example:
            duration: 800,  // Animation duration
            offset: 200,    // Offset (in pixels) from the element's position
        });
    }, []);

    useEffect(() => {
        fetch('http://localhost:5001/truks')
            .then(res => res.json())
            .then(data => setTracks(data))
            .catch(err => console.error(err))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5001/police')
            .then(res => res.json())
            .then(data => setPolices(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className='bg-slate-300'>
            <h1 className='text-center text-black font-bold text-4xl py-11'>this is our shope by catagory section</h1>
            <div>
                <Tabs className={'text-white'}>
                    <TabList className={'text-4xl '}>
                        <Tab >sports car</Tab>
                        <Tab>truck</Tab>
                        <Tab>mini police car</Tab>
                    </TabList>

                    <TabPanel data-aos="fade-up">
                        <div className='grid lg:grid-cols-3 gap-4 mt-4'>
                            {
                                cars.map(car => <SingleCars
                                    key={car._id}
                                    car={car}
                                ></SingleCars>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel data-aos="fade-up">
                        <div className='grid lg:grid-cols-3 gap-4 mt-4'>
                            {
                                trucks.map(truck =><SingleTruks 
                                key={truck._id}
                                truck={truck}
                                ></SingleTruks>)
                            }
                        </div>
                    </TabPanel >
                    <TabPanel data-aos="fade-up">
                        <div className='grid lg:grid-cols-3 gap-4 mt-4'>
                            {
                                polices.map(police =><PoliceCartDtails 
                                key={police._id}
                                police={police}
                                ></PoliceCartDtails>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopeByCatagory;