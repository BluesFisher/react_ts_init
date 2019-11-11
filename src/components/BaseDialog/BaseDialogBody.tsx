import * as React from 'react';
import { IBodyFooterProps } from './base-dialog';

const BaseDialogBody: React.FC<IBodyFooterProps> = (props: IBodyFooterProps) => {
    return (
        <div className="baseDialog-body" style={props.style}>
            {props.children}
        </div>
    );
};

export default BaseDialogBody;
