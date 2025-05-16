import React from 'react';
import Header from "./Header.tsx";

const Layout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className={"w-full h-screen"}>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;