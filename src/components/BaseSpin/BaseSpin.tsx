import * as React from 'react';
import './BaseSpin.less';

interface InterPropsType {
    userClass?: string;
    tips: string;
}

const defaultProps = {
    tips: '正在加载...'
};

const BaseSpin: React.FC<InterPropsType> = (propsIn: InterPropsType) => {
    const props: InterPropsType = { ...JSON.parse(JSON.stringify(defaultProps)), ...propsIn };
    const { userClass, tips } = props;

    return (
        <div className={`spin-contain ${userClass}`}>
            <div className="spin-pic">
                <i />
                <i />
                <i />
                <i />
            </div>
            <div className="loading-tips">{tips}</div>
        </div>
    );
};

export default BaseSpin;
