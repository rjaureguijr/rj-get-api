import React from 'react';

function WithListLoading(Component) {
    return function WithLoadingComponent ({ isLoading, ...props }) {
        if (!isLoading) {
            return <Component {...props} />;
        }
        return (
            <p className='p-list-loading'>
                Loading the data...
            </p>
        );
    };
}

export default WithListLoading;