import React from 'react'
import LoginForm from './LoginForm';

import {LoginProps} from './interface'

export const LuxoutLogin: React.FC<LoginProps> = ({exportObj}) => {
        return <LoginForm exportObj={exportObj}/>;
}