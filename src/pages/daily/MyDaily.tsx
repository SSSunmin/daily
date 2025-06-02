import Layout from "../../components/Layout.tsx";
import DailyCard from "./DailyCard.tsx";
import Profile from "../myPage/Profile.tsx";
import {useEffect, useState} from "react";
import {Get} from "../../axios.ts";
import Pagination from "../../components/Pagination.tsx";
import {useNavigate} from "react-router-dom";

interface PaginationDto{
    "pageable": {
        "pageNumber": number,
        "pageSize": number,
        "sort": {
            "unsorted": boolean,
            "sorted": boolean,
            "empty": boolean
        },
        "offset": number,
        "unpaged": boolean,
        "paged": boolean
    },
    "totalPages": number,
    "totalElements": number,
    "last": boolean,
    "numberOfElements": number,
    "size": number,
    "number": number,
    "sort": {
        "unsorted": boolean,
        "sorted": boolean,
        "empty": boolean
    },
    "first": boolean,
    "empty": boolean
}
interface DailyFile{
    "createAt": string,
    "createId": string,
    "updateAt": string,
    "updateId": string,
    "filePid": number,
    "diaryPid": number,
    "filePath":string,
    "srcPath": string,
    "fileName": string,
}
export interface DailyCommentDto{
    "createAt": string
    "createId": string
    "updateAt":string
    "updateId": string
    "commentPid": number,
    "diaryPid":number,
    "comment": string
}
export interface DailyContentDto{
    "createAt": string
    "createId": string
    "updateAt": string
    "updateId": string
    "diaryPid": number,
    "userPid": number,
    "isShare": boolean,
    "title": string,
    "contents": string,
    "diaryFile": DailyFile,
    "comments"?: DailyCommentDto[],
    "isLike": boolean,
    "image": string
}

export interface DailyListDto extends PaginationDto{
    "content": Array<DailyContentDto>,
}

const MyDaily = () => {
    const [page, setPage] = useState(0);
    const [dailyList, setDailyList] = useState<DailyContentDto[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const navigate = useNavigate();
    const isLogin = window.localStorage.getItem("at");

    const getDiaryList = async ()=>{
        const res =await Get<{data:DailyListDto}>(`/v1/diary?isShare=false&size=10&page=${page}`)
        setDailyList(res.data.content)
        setTotalPages(res.data.totalPages)
    }

    useEffect(() => {
        getDiaryList()
    },[page])

    useEffect(() => {
        if(!isLogin){
            navigate('/')
        }
    }, []);
    return (
        <Layout>
            <main className={"h-full flex justify-center pt-[116px] pb-[36px] bg-[#F8F9FB]"}>
                <div className={'flex flex-col w-[1200px]'}>
                    <div className={'flex h-[calc(100%-50px)]'}>
                        <section className={"mr-[40px]"}>
                            <div className={"w-[780px] grid grid-cols-2 gap-[16px]"}>
                                {dailyList.map((item)=><DailyCard id={item.diaryPid} image={item.diaryFile?.srcPath} title={item.title} text={item.contents}/>)}
                            </div>
                        </section>
                        <section>
                            <Profile/>
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

export default MyDaily;
