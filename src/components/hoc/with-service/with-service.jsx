import React from 'react';
import { ServiceConsumer } from '../../context/service-context';

const withService = () => Wrapped => props => (
    <ServiceConsumer>
        {
            service => (
                <Wrapped
                    {...props}
                    service={service}
                />
            )
        }
    </ServiceConsumer>
);

export default withService;
