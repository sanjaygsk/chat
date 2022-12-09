import React from 'react';
import { AppIcon } from '../../assets/svg'
import './splash.styles.scss'

type Types = {

}

const SplashScreen = (props: Types) => {
    return <>
        <div className='wrapper'>
            <div className='logo'>
                <AppIcon />
            </div>
        </div>
    </>
}

export default SplashScreen;