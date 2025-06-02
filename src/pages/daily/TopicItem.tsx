
import {useNavigate} from "react-router-dom";

const TopicItem = ({title, creator, id}:{title:string, creator:string, id:string}) => {
    const navigator = useNavigate();


    return <div className={"flex justify-between px-[10px] py-[16px] rounded-[8px] cursor-pointer hover:bg-[#EEF1F0] "} onClick={()=>navigator(`/diary-detail?id=${id}`)}>
        <p className={'text-[#3F3F49]'}>{title}</p>
        <p className={'text-[#A9A9B2]'}>{creator}</p>
    </div>
};

export default TopicItem;