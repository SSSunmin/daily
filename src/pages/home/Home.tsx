import Layout from "../../components/Layout.tsx";
import Login from "./Login.tsx";
// import {useNavigate} from "react-router-dom";
import Profile from "../myPage/Profile.tsx";
import {useEffect, useState} from "react";
// import {Get} from "../../axios.ts";
// import {ShareDiaryListDto} from "../myPage/MyPage.tsx";
// import TopicItem from "../daily/TopicItem.tsx";

const Home = () => {
    const [isLogin, setIsLogin] = useState(false);
    // const navigate = useNavigate();
    // const [bestList, setBestList] = useState<ShareDiaryListDto[]>([]);

    // const getTopicBest = async ()=>{
    //     const res = await Get<{ data:ShareDiaryListDto[] }>('/v1/diary/top')
    //     setBestList(res.data);
    // }

    useEffect(() => {
        // getTopicBest()
        const isLogin = window.localStorage.getItem('at');
        if(isLogin){
            setIsLogin(true);
        }else{
            setIsLogin(false);
        }
    }, []);

    return (
        <Layout >
            <main className={"h-full flex justify-center pt-[116px] bg-[#F8F9FB]"}>
                <div className={"w-[1200px] flex"}>
                    {/*<section className={" mr-[40px] "}>*/}
                    {/*    <div className={"flex justify-between items-center text-[20px] font-bold p-[10px]"}>*/}
                    {/*        <p>🔥 토픽 베스트</p>*/}
                    {/*        <p className={'text-[16px] cursor-pointer'} onClick={()=>navigate('/someone-diary')}>더보기 &gt; </p>*/}
                    {/*    </div>*/}
                    {/*    <ul className={"bg-white w-[780px] p-[10px] flex flex-col gap-[10px] rounded-[16px] border border-[#E6E6E6]"}>*/}
                    {/*        {bestList?.map((item)=><TopicItem key={item.diaryPid} id={item.diaryPid.toString()} creator={item.createId} title={item.title}/>)}*/}
                    {/*    </ul>*/}
                    {/*</section>*/}
                    <section>
                        {isLogin?  <Profile/>:<Login handleLogin={()=>setIsLogin(true)}/>}
                    </section>
                </div>

            </main>
        </Layout>
    );
};

export default Home;