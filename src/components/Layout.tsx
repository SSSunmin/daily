import React from 'react';
import Header from "./Header.tsx";

const Layout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className={"w-screen h-screen bg-[#F8F9FB]"}>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;