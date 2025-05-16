import {useState} from "react";
import Layout from "../../components/Layout.tsx";
import { FaRegHeart, FaHeart  } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";

const DUMMY_COMMENT =[{"nickName":'푸바오러버', "text":'야나두 ㅇㅇ', "date":"2025. 05. 13"}]

const CommentItem = ({nickName, text, date, isLast = false}:{nickName:string, text:string, date:string, isLast?:boolean})=>{
    return <div className={`px-[24px] py-[17px] flex flex-col gap-[8px] ${isLast?'':' border-b border-[#E1E5E9]'}`}>
        <p className={"text-[16px] text-[#646371] tracking-[-0.48px] font-medium"}>{nickName}</p>
        <p className={"text-[18px] text-[#3F3F49] font-medium tracking-[-0.54px] "}>{text}</p>
        <p className={"text-[15px] text-[#A9A9B2] font-medium tracking-[-0.45px]"}>{date}</p>
    </div>
}

const DailyDetail = () => {
    const [isLike, setIsLike]=useState(false);
    const [comment, setComment]=useState("");
    const [commentList, setCommentList]=useState(DUMMY_COMMENT);

    const handleLike = () => {
        setIsLike((prev) => !prev);
    }

    const saveComment = () => {
        const today = new Date().toLocaleDateString('ko-KR')
        setCommentList([...commentList, {"nickName":'푸바오러버', "text":comment, "date":today.slice(0,today.length-1)}]);
        setComment("")
    }

    return (
        <Layout>
            <main className={"flex min-h-full px-[550px] pt-[96px] pb-[26px] bg-[#F8F9FB]"}>
                <div className={"w-full rounded-[18px] border border-[#E6E6E6] bg-white"}>
                    <section className={"px-[24px] py-[16px] border-b border-[#E1E5E9]"}>
                        <p className={"mb-[10px] text-[#3F3F49] text-[20px] font-semibold tracking-[-0.6px]"}>집에 가고 싶다.</p>
                        <p className={"text-[#A9A9B2] text-[15px] font-medium tracking-[-0.45px] "}>2025.05.13</p>
                    </section>
                    <section className={"px-[36px] py-[16px] border-b border-[#E1E5E9]"}>
                        <img className={"w-[500px] h-[480px] object-cover mb-[10px]"} alt={"img"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06Ul0NQKM8XWXqD-MkpGVpn77DOJlvqlBhw&s"}/>
                        <p className={"text-[#25252F] text-[16px] font-medium tracking-[-0.48px]"}>집인데도 집에 가고싶다. 너무 너무 가고싶다</p>
                    </section>
                    <section className={"flex gap-[16px] px-[24px] py-[16px] border-b border-[#E1E5E9]"}>
                        <p className={"flex gap-[8px] items-center cursor-pointer"} onClick={handleLike}>{isLike?<FaHeart />:<FaRegHeart/>} 510</p>
                        <p className={"flex gap-[8px] items-center"}><LuMessageSquare /> {commentList.length}</p>
                    </section>
                    <section className={"flex justify-between px-[24px] py-[12px] border-b border-[#E1E5E9]"}>
                        <input className={"w-4/5 outline-0"} placeholder={"댓글을 입력해 주세요."} value={comment} onChange={(e) => setComment(e.target.value)}/>
                        <button disabled={comment.length < 1} className={`h-[40px] px-[24px]  rounded-[50px] text-white text-[16px] font-bold tracking-[-0.48px] ${comment.length >0 ?'bg-[#2BC09D]':'bg-[#A9A9B2]'}`} onClick={saveComment}>등록</button>
                    </section>
                    {commentList.map((item,index)=><CommentItem key={`comment_${index}`} nickName={item.nickName} text={item.text} date={item.date} isLast={index === commentList.length-1}/>)}
                </div>
            </main>
        </Layout>
    );
};

export default DailyDetail;