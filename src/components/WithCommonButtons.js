import React from 'react';
import CommonButtons from './CommonButtons'; // Use the same Layout component from Option 1

const WithCommonButtons = (WrappedComponent) => {
    return props => (
        <CommonButtons>
            <WrappedComponent {...props} />
        </CommonButtons>
    );
};

export default WithCommonButtons;