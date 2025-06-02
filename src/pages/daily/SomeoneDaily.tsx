import Layout from "../../components/Layout.tsx";
import DailyCard from "./DailyCard.tsx";
import Profile from "../myPage/Profile.tsx";
import Login from "../home/Login.tsx";
import {useEffect, useState} from "react";
import {Get} from "../../axios.ts";
import {DailyContentDto,DailyListDto} from "./MyDaily.tsx";
import Pagination from "../../components/Pagination.tsx";


const SomeoneDaily = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [page, setPage] = useState(0);
    const [dailyList, setDailyList] = useState<DailyContentDto[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);

    const getDiaryList = async ()=>{
        const res =await Get<{data:DailyListDto}>(`/v1/diary?isShare=true&size=10&page=${page}`)
        setDailyList(res.data.content)
        setTotalPages(res.data.totalPages)
    }

    useEffect(() => {
        getDiaryList()
    },[page])

    useEffect(() => {
        const isLogin = window.localStorage.getItem('at');
        if(isLogin){
            setIsLogin(true);
        }else{
            setIsLogin(false);
        }
    }, []);
    return (
        <Layout>
            <main className={"h-full flex justify-center pt-[116px] pb-[36px] bg-[#F8F9FB]"}>
                <div className={'flex flex-col w-[1200px]'}>
                    <div className={'flex h-[calc(100%-50px)]'}>
                        <section className={"mr-[40px]"}>
                            <div className={"w-[780px] grid grid-cols-2 gap-[16px]"}>
                                {dailyList.map((item)=><DailyCard id={item.diaryPid} image={item.diaryFile.srcPath} title={item.title} text={item.contents}/>)}
                            </div>
                        </section>
                        <section>
                            {isLogin?  <Profile/>:<Login handleLogin={()=>setIsLogin(true)}/>}
                        </section>
                    </div>

                    <div className={'mt-auto'}>
                        {
                            dailyList.length > 0 &&  <Pagination
                                currentPage={page}
                                totalPages={totalPages}
                                onPageChange={(page) => setPage(page)}
                            />
                        }
                    </div>
                </div>

            </main>
        </Layout>
    );
};

export default SomeoneDaily;
