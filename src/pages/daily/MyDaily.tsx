import Layout from "../../components/Layout.tsx";
import DailyCard from "./DailyCard.tsx";
import Profile from "../myPage/Profile.tsx";

const DUMMY_DAILY =[
        {
            "id":'1',
            "title":'제목입니다.',
            "text":'  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisi nec velit.',
            "image":'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'
        },
        {
            "id":'2',
            "title":'제목입니다.',
            "text":'상세 내용',
            "image":'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'
        },
        {
            "id":'3',
            "title":'제목입니다.',
            "text":'상세 내용',
            "image":'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'
        },
        {
            "id":'4',
            "title":'제목입니다.',
            "text":'상세 내용',
            "image":'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'
        },
        {
            "id":'5',
            "title":'제목입니다.',
            "text":'상세 내용',
            "image":'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'
        },
        {
            "id":'6',
            "title":'제목입니다.',
            "text":'상세 내용',
            "image":'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'
        },
    ]
const MyDaily = () => {
    return (
        <Layout>
            <main className={"flex px-[410px] pt-[116px] pb-[36px] bg-[#F8F9FB]"}>
                <section className={"mr-[40px]"}>
                    <div className={"w-[780px] grid grid-cols-2 gap-[16px]"}>
                        {DUMMY_DAILY.map((item)=><DailyCard id={item.id} image={item.image} title={item.title} text={item.text}/>)}
                    </div>
                </section>
                <section>
                   <Profile/>
                </section>
            </main>
        </Layout>
    );
};

export default MyDaily;
