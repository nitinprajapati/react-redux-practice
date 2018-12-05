import React from 'react';
import BlockUi from 'react-block-ui';
import { Loader } from 'react-loaders';
import 'react-block-ui/style.css';
import 'loaders.css/loaders.min.css';
import './spinner.scss';

const getClassName = (loading) => {
    return loading ? 'spinner' : '';
}

const Spinner = (loading) => (
    <BlockUi 
        tag="div" className={getClassName(loading.status)} 
        blocking={loading.status} 
        message={loading.message}
        loader={
            <Loader active 
                type={loading.loaderType} 
                color={loading.color} 
            />
        }
     />
);

export default Spinner;