import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home.tsx";
import MyDaily from "../pages/daily/MyDaily.tsx";
import SomeoneDaily from "../pages/daily/SomeoneDaily.tsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/my-diary"} element={<MyDaily/>}/>
                <Route path={"/someone-diary"} element={<SomeoneDaily/>}/>
            </Routes>

        </BrowserRouter>
    );
};

export default Router;
