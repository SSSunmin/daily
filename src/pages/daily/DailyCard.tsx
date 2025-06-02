import {useNavigate} from "react-router-dom";

const DailyCard = ({id,image, title, text }:{id:number, image:string, title:string, text:string }) =>{
    const navigator = useNavigate();

    return (
        <div className={"w-[350px] flex flex-col gap-[10px] px-[16px] py-[26px] bg-white rounded-[12px] border border-[#E6E6E6] cursor-pointer"}
             onClick={()=>navigator(`/diary-detail?id=${id}`)}>
            <img className={"w-full h-[185px] rounded-[12px] object-cover"} src={'http://ec2-3-39-239-224.ap-northeast-2.compute.amazonaws.com:8080'+image} alt={title}/>
            <p className={"text-[#3F3F49] text-[16px] tracking-[-0.48px]"}>{title}</p>
            <p className={"text-[#737382] text-[16px] tracking-[-0.48px] line-clamp-2"}>{text}</p>
        </div>
    );
};

export default DailyCard;