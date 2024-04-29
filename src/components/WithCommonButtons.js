import React from 'react';
import CommonButtons from './CommonButtons';

const WithCommonButtons = (WrappedComponent) => {
    return props => (
        <CommonButtons>
            <WrappedComponent {...props} />
        </CommonButtons>
    );
};

export default WithCommonButtons;