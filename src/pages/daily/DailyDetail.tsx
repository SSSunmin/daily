import {useEffect, useState} from "react";
import Layout from "../../components/Layout.tsx";
import { FaRegHeart, FaHeart  } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import {Get, Post} from "../../axios.ts";
import {useSearchParams} from "react-router-dom";
import {DailyCommentDto, DailyContentDto} from "./MyDaily.tsx";


const CommentItem = ({nickName, text, date, isLast = false}:{nickName:string, text:string, date:string, isLast?:boolean})=>{
    return <div className={`px-[24px] py-[17px] flex flex-col gap-[8px] ${isLast?'':' border-b border-[#E1E5E9]'}`}>
        <p className={"text-[16px] text-[#646371] tracking-[-0.48px] font-medium"}>{nickName}</p>
        <p className={"text-[18px] text-[#3F3F49] font-medium tracking-[-0.54px] "}>{text}</p>
        <p className={"text-[15px] text-[#A9A9B2] font-medium tracking-[-0.45px]"}>{date.split('T')[0]}</p>
    </div>
}

const DailyDetail = () => {
    const [isLike, setIsLike]=useState(false);
    const [comment, setComment]=useState("");
    const [commentList, setCommentList]=useState<DailyCommentDto[]>();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const [detailData, setDetailData]=useState<DailyContentDto|null>(null);

    const handleLike = async () => {
        setIsLike((prev) => !prev);
        const res = await Get(`/v1/diary-like?diaryPid=${id}`)
        console.log(res)

    }

    const saveComment = async () => {
        const res = await Post(`/v1/diary/${id}/comment`,{comment})
        console.log(res)
        setComment("")
    }

    const getDailyDetails = async () => {
        const res = await Get<{data:DailyContentDto}>(`/v1/diary/${id}`)
        console.log(res)
        setDetailData(res.data)
        setIsLike(res.data.isLike)
        setCommentList(res.data.comments)
    }

    useEffect(() => {
        getDailyDetails()
    },[comment])

    return (
        <Layout>
            <main className={"flex justify-center min-h-full pt-[96px] pb-[26px] bg-[#F8F9FB]"}>
                <div className={"w-[1000px] rounded-[18px] border border-[#E6E6E6] bg-white"}>
                    <section className={"px-[24px] py-[16px] border-b border-[#E1E5E9]"}>
                        <p className={"mb-[10px] text-[#3F3F49] text-[20px] font-semibold tracking-[-0.6px]"}>{detailData?.title}</p>
                        <p className={"text-[#A9A9B2] text-[15px] font-medium tracking-[-0.45px] "}>{detailData?.createAt.split('T')[0]}</p>
                    </section>
                    <section className={"px-[36px] py-[16px] border-b border-[#E1E5E9]"}>
                        <img className={"w-[500px] h-[480px] object-cover mb-[10px]"} alt={"img"} src={'http://3.39.239.224:8080'+detailData?.diaryFile.srcPath}/>
                        <div className={"text-[#25252F] text-[16px] font-medium tracking-[-0.48px] whitespace-pre-line"} >{detailData?.contents}</div>
                    </section>
                    <section className={"flex gap-[16px] px-[24px] py-[16px] border-b border-[#E1E5E9]"}>
                        <p className={"flex gap-[8px] items-center cursor-pointer"} onClick={handleLike}>{isLike?<FaHeart />:<FaRegHeart/>}</p>
                        <p className={"flex gap-[8px] items-center"}><LuMessageSquare /> {detailData?.comments?.length}</p>
                    </section>
                    <section className={"flex justify-between px-[24px] py-[12px] border-b border-[#E1E5E9]"}>
                        <input className={"w-4/5 outline-0"} placeholder={"댓글을 입력해 주세요."} value={comment} onChange={(e) => setComment(e.target.value)}/>
                        <button disabled={comment.length < 1} className={`h-[40px] px-[24px]  rounded-[50px] text-white text-[16px] font-bold tracking-[-0.48px] ${comment.length >0 ?'bg-[#2BC09D]':'bg-[#A9A9B2]'}`} onClick={saveComment}>등록</button>
                    </section>
                    {commentList?.map((item,index)=><CommentItem key={`comment_${index}`} nickName={item.createId} text={item.comment} date={item.createAt} isLast={commentList?index === commentList?.length-1:true}/>)}
                </div>
            </main>
        </Layout>
    );
};

export default DailyDetail;