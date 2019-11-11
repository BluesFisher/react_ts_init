import * as React from 'react';
import { IBodyFooterProps } from './base-dialog';

const BaseDialogFooter: React.FC<IBodyFooterProps> = (props: IBodyFooterProps) => {
    return (
        <div className="baseDialog-footer" style={props.style}>
            {props.children}
        </div>
    );
};

export default BaseDialogFooter;
