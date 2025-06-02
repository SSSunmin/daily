import Layout from "../../components/Layout.tsx";
import Profile from "./Profile.tsx";
import {useState} from "react";
import TopicItem from "../daily/TopicItem.tsx";

export interface CommentListDto{
    "createAt": string,
    "createId": string,
    "updateAt": string,
    "updateId": string,
    "commentPid": number,
    "diaryPid": number,
    "comment": string
}
export interface ShareDiaryListDto{
    "createAt": string,
    "createId": string,
    "updateAt": string,
    "updateId": string,
    "diaryPid": number,
    "userPid": number,
    "title": string,
    "contents": string,
}

const MyPage = () => {
    const [shareDiaryList, setShareDiaryList]=useState<ShareDiaryListDto[]>([])
    const [commentList, setCommentList]=useState<CommentListDto[]>([])

    const handleShareDiaryList = (data:ShareDiaryListDto[])=>{
        setShareDiaryList(data)
    }
    const handleCommentList = (data:CommentListDto[])=>{
        setCommentList(data)
    }
    return (
        <Layout>
            <main className={"h-full flex justify-center pt-[116px] pb-[56px] bg-[#F8F9FB]"}>
                <div className={"w-[1200px] flex  gap-[40px]"}>
                    <section className={" flex flex-col"}>
                        <section className={""}>
                            <div className={"flex justify-between items-center text-[20px] font-bold p-[10px]"}>
                                <p>✨남의 일기 목록</p>
                            </div>
                            <ul className={"bg-white w-[780px] p-[10px] flex flex-col gap-[10px] rounded-[16px] border border-[#E6E6E6]"}>
                                {shareDiaryList.map((item)=><TopicItem key={item.diaryPid} id={item.diaryPid.toString()} title={item.title} creator={item.createId}/>)}
                            </ul>
                        </section>
                        <section className={""}>
                            <div className={"flex justify-between items-center text-[20px] font-bold p-[10px]"}>
                                <p>✏️댓글 목록</p>
                            </div>
                            <ul className={"bg-white w-[780px] p-[10px] flex flex-col gap-[10px] rounded-[16px] border border-[#E6E6E6]"}>
                                {commentList.map((item)=><TopicItem key={item.diaryPid} id={item.diaryPid.toString()} title={item.comment} creator={item.createId}/>)}
                            </ul>
                        </section>
                    </section>
                    <section className={"mt-[50px]"}>
                        <Profile handleCommentList={handleCommentList} handleShareDiaryList={handleShareDiaryList}/>
                    </section>
                </div>

            </main>
        </Layout>
    );
};

export default MyPage;
