import Header from "../../components/Header.tsx";

const Home = () => {
    return (
        <div className={"w-full h-full "} >
            <Header/>
            <main className={"h-full px-[160px] pt-[10px] "}>
                <h2 className={"text-[20px] font-bold"}>오늘의 하이라이트</h2>
                <section className={"flex items-center justify-between"}>

                    <div className={"w-[320px] h-[400px] shadow-md bg-white rounded-xl p-[16px]"}>
                        <div>
                            <img
                                src="https://picsum.photos/200/300"
                                alt="Highlight"
                            />
                            <p>가장 인기 있는 게시물의 간단한 설명이 여기에 표시됩니다.</p>
                        </div>
                    </div>
                    <div className={"w-[320px] h-[400px] shadow-md bg-white rounded-xl p-[16px]"}>
                        <div>
                            <img
                                src="https://picsum.photos/200/300"
                                alt="Highlight"
                            />
                            <p>가장 인기 있는 게시물의 간단한 설명이 여기에 표시됩니다.</p>
                        </div>
                    </div>
                    <div className={"w-[320px] h-[400px] shadow-md bg-white rounded-xl p-[16px]"}>
                        <div>
                            <img
                                src="https://picsum.photos/200/300"
                                alt="Highlight"
                            />
                            <p>가장 인기 있는 게시물의 간단한 설명이 여기에 표시됩니다.</p>
                        </div>
                    </div>
                    <div className={"w-[320px] h-[400px] shadow-md bg-white rounded-xl p-[16px]"}>
                        <div>
                            <img
                                src="https://picsum.photos/200/300"
                                alt="Highlight"
                            />
                            <p>가장 인기 있는 게시물의 간단한 설명이 여기에 표시됩니다.</p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default Home;