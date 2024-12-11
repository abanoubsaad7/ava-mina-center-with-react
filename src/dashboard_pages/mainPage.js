import React from 'react';
import SideBar from '../components/main_and_side_Bar/sideBar';

const MainPage = () => {
    return (
        <div className='row container'>
            <div className='col-4'>
                <SideBar/>
            </div>
            <div className='col-6'>
                <h1>
                    Design House Management DashBoard
                </h1>
            </div>
            
        </div>
    );
}

export default MainPage;
