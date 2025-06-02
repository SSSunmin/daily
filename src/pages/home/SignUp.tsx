import {FormEvent, useState} from 'react';
import {IoMdClose} from "react-icons/io";
import {signup} from "../../service/auth.ts";

const SignUp = ({closeModal}:{closeModal:()=>void}) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            "loginId":id,
            "password": password,
            "nickName":nickName,
            "name": name
        }
        await signup(data)
        closeModal();
    }


    return (
        <form className={`w-[400px] flex flex-col justify-center align-center rounded-[16px] bg-white border border-[#E6E6E6]`} onSubmit={handleSubmit}>
            <section className={'w-full flex items-center justify-between px-[24px] py-[16px] border-b border-[#E1E5E9]'}>
                <IoMdClose className={'cursor-pointer'} size={24} onClick={closeModal}/>
                <p className={'text-[20px] text-[#3F3F49] font-bold tracking-[-0.6px]'}>회원가입</p>
                <button type={'submit'} className={'flex justify-center items-center px-[24px] h-[50px] bg-[#2BC09D] text-white font-bold rounded-[50px]'} >
                    <p className={'text-[16px] font-bold leading-[-0.48px]'}>가입</p>
                </button>
            </section>
            <div className={`flex justify-center flex-col gap-[10px] px-[15px] py-[20px]`}>
                <label >
                    <p className={'text-[13px] font-medium'}>이름</p>
                    <div className={'border border-[#A9A9B2] h-[40px] flex items-center justify-center px-[10px] rounded-[6px]'}>
                        <input type={'text'} required className={'w-full outline-0 '} placeholder={"이름 입력"} value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                </label>
                <label >
                    <p className={'text-[13px] font-medium'}>닉네임</p>
                    <div className={'border border-[#A9A9B2] h-[40px] flex items-center justify-center px-[10px] rounded-[6px]'}>
                        <input type={'text'} required className={'w-full outline-0 '} placeholder={"닉네임 입력"} value={nickName} onChange={(e)=>setNickName(e.target.value)}/>
                    </div>
                </label>
                <label >
                    <p className={'text-[13px] font-medium'}>아이디</p>
                    <div className={'border border-[#A9A9B2] h-[40px] flex items-center justify-center px-[10px] rounded-[6px]'}>
                        <input required className={'w-full outline-0 '} placeholder={"아이디 입력"} value={id} onChange={(e)=>setId(e.target.value)}/>
                    </div>
                </label>
                
                <label >
                    <p className={'text-[13px] font-medium'}>비밀번호</p>
                    <div className={'border border-[#A9A9B2] h-[40px] flex items-center justify-center px-[10px] rounded-[6px]'}>
                        <input required type={'password'} className={'w-full outline-0 '} placeholder={"비밀번호 입력"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                </label>
            </div>
        </form>
    );
};

export default SignUp;
