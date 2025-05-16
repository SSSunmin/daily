import Layout from "../../components/Layout.tsx";
import Login from "./Login.tsx";
import {useNavigate} from "react-router-dom";
import Profile from "../myPage/Profile.tsx";
import {useState} from "react";

const DUMMY_ITEM =[
    {"id":"0","title":'제목입니다.', "creator":'작성자명'},
    {"id":"1","title":'제목입니다.', "creator":'작성자명'},
    {"id":"2","title":'제목입니다.', "creator":'작성자명'},
    {"id":"3","title":'제목입니다.', "creator":'작성자명'},
    {"id":"4","title":'제목입니다.', "creator":'작성자명'},
    {"id":"5","title":'제목입니다.', "creator":'작성자명'},
    {"id":"6","title":'제목입니다.', "creator":'작성자명'},
    {"id":"7","title":'제목입니다.', "creator":'작성자명'},
    {"id":"8","title":'제목입니다.', "creator":'작성자명'},
    {"id":"9","title":'제목입니다.', "creator":'작성자명'},

]
const TopicItem = ({title, creator, id}:{title:string, creator:string, id:string})=>{
    return <div className={"flex justify-between px-[10px] py-[16px] rounded-[8px] cursor-pointer hover:bg-[#EEF1F0] "} onClick={()=>console.log(id)}>
        <p className={'text-[#3F3F49]'}>{title}</p>
        <p className={'text-[#A9A9B2]'}>{creator}</p>
    </div>
}

const Home = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    return (
        <Layout >
            <main className={"h-full flex px-[410px] pt-[116px] bg-[#F8F9FB]"}>
                <section className={"mr-[40px]"}>
                    <div className={"flex justify-between items-center text-[20px] font-bold p-[10px]"}>
                        <p>🔥 토픽 베스트</p>
                        <p className={'text-[16px] cursor-pointer'} onClick={()=>navigate('/someone-diary')}>더보기 &gt; </p>
                    </div>
                    <ul className={"bg-white w-[780px] p-[10px] flex flex-col gap-[10px] rounded-[16px] border border-[#E6E6E6]"}>
                        {DUMMY_ITEM.map((item)=><TopicItem key={item.id} {...item}/>)}
                    </ul>
                </section>
                <section>
                    {isLogin?  <Profile/>:<Login/>}
                </section>

            </main>
        </Layout>
    );
};

export default Home;