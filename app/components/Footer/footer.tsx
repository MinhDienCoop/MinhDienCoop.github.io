'use client'
import { Layout } from 'antd';

const Footer = () => {
    return (
        <Layout.Footer style={{ textAlign: 'center' }}>
          Mdc Design ©{new Date().getFullYear()} Created by Mdc
        </Layout.Footer>
    );
}
 
export default Footer;