import Layout from "../../components/Layout.tsx";
import Profile from "./Profile.tsx";


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

const MyPage = () => {
    return (
        <Layout>
            <main className={"flex gap-[40px] px-[410px] pt-[116px] pb-[56px] bg-[#F8F9FB]"}>
                <section className={"flex flex-col"}>
                    <section className={""}>
                        <div className={"flex justify-between items-center text-[20px] font-bold p-[10px]"}>
                            <p>✨남의 일기 목록</p>
                        </div>
                        <ul className={"bg-white w-[780px] p-[10px] flex flex-col gap-[10px] rounded-[16px] border border-[#E6E6E6]"}>
                            {DUMMY_ITEM.map((item)=><TopicItem key={item.id} {...item}/>)}
                        </ul>
                    </section>
                    <section className={""}>
                        <div className={"flex justify-between items-center text-[20px] font-bold p-[10px]"}>
                            <p>✏️댓글 목록</p>
                        </div>
                        <ul className={"bg-white w-[780px] p-[10px] flex flex-col gap-[10px] rounded-[16px] border border-[#E6E6E6]"}>
                            {DUMMY_ITEM.map((item)=><TopicItem key={item.id} {...item}/>)}
                        </ul>
                    </section>
                </section>
                <section className={"mt-[50px]"}>
                    <Profile/>
                </section>

            </main>
        </Layout>
    );
};

export default MyPage;
