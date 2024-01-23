'use client'
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const BreadcrumbComponent = () => {
    return (
        <Breadcrumb className='py-2'
            items={[
              {
                href: '',
                title: <HomeOutlined />,
              },
              {
                href: '',
                title: 'Application List'
              },
              {
                title: 'Application',
              },
            ]}
        />
    );
}
 
export default BreadcrumbComponent;