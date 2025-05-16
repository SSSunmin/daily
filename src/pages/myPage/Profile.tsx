
const Profile = () => {
    return (
        <div className={`w-[280px] py-[32px] px-[15px] flex flex-col justify-center align-center gap-[10px] rounded-[24px] bg-white border border-[#E6E6E6]`}>
            <div className={'ml-auto mr-auto rounded-full w-[120px] h-[120px]'}>
                <img src={'/profile.png'} alt={'profile image'}/>
              
            </div>
            <div className={'flex gap-[10px] justify-center'}>
                <p className={"text-[20px] text-[#3F3F49] font-bold"}>오늘 하루</p>
                <button className={' text-[#A9A9B2] border rounded-[25px] px-[12px]'}>로그아웃</button>
            </div>
            <div>
                <div>마이페이지</div>
                <div className={'flex justify-between'}>
                    <div>
                        <p>나의 일기</p>
                        <p>104개</p>
                    </div>
                    <div>
                        <p>나의 일기</p>
                        <p>104개</p>
                    </div>
                    <div>
                        <p>나의 일기</p>
                        <p>104개</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
