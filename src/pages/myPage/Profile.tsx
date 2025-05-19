import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";
import Modal from "../../components/Modal.tsx";
import ProgileEditor from "./ProfileEditor.tsx";

const Profile = () => {
    const navigate = useNavigate();
    const [showEditProfile, setShowEditProfile] = useState(false);

    return (
        <>
            <div
                className={`w-[280px] py-[32px] px-[15px] flex flex-col justify-center align-center gap-[10px] rounded-[24px] bg-white border border-[#E6E6E6]`}>
                <div className={'relative ml-auto mr-auto rounded-full w-[120px] h-[120px] border border-[#E6E6E6]'}>
                    <img src={'/profile.png'} alt={'profile image'}/>
                    <MdOutlineModeEdit size={24} color={'#A9A9B2'}
                                       className={'absolute bottom-0 right-0 cursor-pointer'}
                                       onClick={() => setShowEditProfile(true)}/>
                </div>
                <div className={'flex gap-[10px] justify-center'}>
                    <p className={"text-[20px] text-[#3F3F49] font-bold"}>오늘 하루</p>
                    <button className={' text-[#A9A9B2] border rounded-[25px] px-[12px]'}>로그아웃</button>
                </div>
                <div className={"px-[8px]"}>
                    <div className={'flex justify-between my-[10px] cursor-pointer'}
                         onClick={() => navigate('/my-page')}><p>마이페이지</p> <FaAngleRight/></div>

                    <div className={'flex gap-[8px] text-[15px] text-[#3F3F49]'}>
                        <p>나의 일기</p>
                        <p className={'font-semibold cursor-pointer'}>104개</p>
                    </div>
                    <div className={'flex gap-[8px] text-[15px] text-[#3F3F49]'}>
                        <p>남의 일기 글</p>
                        <p className={'font-semibold cursor-pointer'}>104개</p>
                    </div>
                    <div className={'flex gap-[8px] text-[15px] text-[#3F3F49]'}>
                        <p>남의 일기 댓글</p>
                        <p className={'font-semibold cursor-pointer'}>104개</p>
                    </div>
                </div>
            </div>
            {showEditProfile && <Modal>
                <ProgileEditor closeModal={() => setShowEditProfile(false)} />
            </Modal>}
        </>
    );
};

export default Profile;
