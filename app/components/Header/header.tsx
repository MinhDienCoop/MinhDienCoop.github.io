'use client'
import { Layout } from 'antd';

import Logo from './logo';
import MainMenu from '@/app/components/Header/mainMenu'

const Header = () => {
    return (
        <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
          <Logo/>
          <MainMenu/>
        </Layout.Header>
    );
}
 
export default Header;