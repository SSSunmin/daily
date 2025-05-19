import {IoMdClose} from "react-icons/io";
import {ChangeEvent, FormEvent, useState} from "react";

const ProfileEditor = ({closeModal}:{closeModal:()=>void}) => {
    const [nickname, setNickname] = useState('오늘 하루');
    const [file, setFile] = useState("");

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {nickname};
        console.log(data);
    }

    const handleFileChange = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onloadend = () => {
                if(typeof reader.result === 'string'){
                    setFile(reader.result);
                }
            };
        }
    }

    return (
        <form className={`w-[400px] flex flex-col justify-center align-center rounded-[16px] bg-white border border-[#E6E6E6]`} onSubmit={handleSubmit}>
            <section className={'w-full flex items-center justify-between px-[24px] py-[16px] border-b border-[#E1E5E9]'}>
                <IoMdClose className={'cursor-pointer'} size={24} onClick={closeModal}/>
                <p className={'text-[20px] text-[#3F3F49] font-bold tracking-[-0.6px]'}>프로필</p>
                <button type={'submit'} className={'flex justify-center items-center px-[24px] h-[50px] bg-[#2BC09D] text-white font-bold rounded-[50px]'} >
                    <p className={'text-[16px] font-bold leading-[-0.48px]'}>수정</p>
                </button>
            </section>
            <div className={`flex justify-center flex-col gap-[10px] px-[15px] py-[20px]`}>
                <input id={"profile"} type={"file"} className={'hidden'} onChange={handleFileChange}/>
                <label htmlFor={'profile'}>
                    <div className={'ml-auto mr-auto rounded-full p-[10px] w-[160px] h-[160px] border border-[#E6E6E6] cursor-pointer'}>
                        <img className={'w-full h-full object-contain'} src={file.length>0?file :'/profile.png'} alt={'profile image'}/>
                    </div>
                </label>


                <label >
                    <p className={'text-[13px] font-medium'}>닉네임</p>
                    <div className={'border border-[#A9A9B2] h-[40px] flex items-center justify-center px-[10px] rounded-[6px]'}>
                        <input type={'text'} required className={'w-full outline-0 '} placeholder={"이메일 입력"} value={nickname} onChange={(e)=>setNickname(e.target.value)}/>
                    </div>
                </label>
            </div>
        </form>
    );
};

export default ProfileEditor;
