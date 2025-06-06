import { IoMdClose } from "react-icons/io";
import {ChangeEvent, useState} from "react";
import {Post} from "../../axios.ts";

const DailyForm = ({closeModal}:{closeModal:()=>void}) => {
    const [title, setTitle] = useState("");
    const [isShared, setIsShared] = useState(false);
    const [contents, setContents] = useState("");
    const [file, setFile] = useState<File>();
    const [fileName, setFileName] = useState("");

    const handleFileChange = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){
            setFile(e.target.files[0])
            setFileName(e.target.files[0].name);
        }
    }

    const handleIsSharedChange = (value: boolean) => {
        setIsShared(value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData();
        form.append(
            "diary",
            new Blob(
                [
                    JSON.stringify({
                        title,
                        contents,
                        isShare: isShared,
                    }),
                ],
                { type: "application/json" }
            )
        );
        if (file) {
            form.append("image", file);
        }
        try {
            const res = await Post("/v1/diary", form, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(res);
            closeModal();
        } catch (err) {
            console.error(err);
            alert("등록에 실패했습니다.");
        }
    };

    return (
        <form className={'w-[800px] h-[670px] max-h-full bg-white rounded-[16px]'} onSubmit={(e)=>handleSubmit(e)}>
            <section className={'w-full flex items-center justify-between px-[24px] py-[16px] border-b border-[#E1E5E9]'}>
                <IoMdClose className={'cursor-pointer'} size={24} onClick={closeModal}/>
                <p className={'text-[20px] text-[#3F3F49] font-bold tracking-[-0.6px]'}>글쓰기</p>
                <button type={'submit'} className={'flex justify-center items-center px-[24px] h-[50px] bg-[#2BC09D] text-white font-bold rounded-[50px]'} >
                    <p className={'text-[16px] font-bold leading-[-0.48px]'}>등록</p>
                </button>
            </section>
            <section className={'px-[24px] py-[16px] border-b border-[#E1E5E9]'}>
                {/* 라디오 버튼 그룹 */}
                <input
                    className={"mr-[5px]"}
                    id={"myDaily"}
                    type={"radio"}
                    name="share"
                    checked={!isShared}
                    onChange={() => handleIsSharedChange(false)}
                />
                <label className={"text-[20px] text-[#3F3F49] font-bold mr-[16px]"} htmlFor={"myDaily"}>
                    나의 일기
                </label>
                <input
                    className={"mr-[5px]"}
                    id={"someone"}
                    type={"radio"}
                    name="share"
                    checked={isShared}
                    onChange={() => handleIsSharedChange(true)}
                />
                <label className={"text-[20px] text-[#3F3F49] font-bold"} htmlFor={"someone"}>
                    남의 일기
                </label>
            </section>
            <section className={'w-full px-[24px] py-[16px] border-b border-[#E1E5E9]'}>
                <input className={'w-full text-[20px] font-medium placeholder:text-[#A9A9B2] outline-0'}
                       placeholder={'제목을 입력해 주세요.'}
                       type={'text'}
                       value={title}
                       onChange={(e:ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}}
                />
            </section>
            <section className={'h-[513px] max-h-[60%] px-[36px] py-[16px] '}>
                <textarea   value={contents}
                            onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>{setContents(e.target.value)}}
                            className={'w-full h-full outline-0 resize-none'}
                            placeholder={'내용을 입력해주세요.'}/>
            </section>
            <section className={'flex gap-[10px] w-full h-[60px] bg-[#EDEFF2] rounded-b-[16px] px-[24px] py-[16px]'}>
                <input id={"file"} type={"file"} className={'hidden'} onChange={handleFileChange}/>
                <label htmlFor={'file'}>
                    <svg className={'cursor-pointer'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8.68771 12.8273L8.04127 12.0643L8.04126 12.0643L8.68771 12.8273ZM8.73722 12.7799L8.02474 12.0782L8.02396 12.079L8.73722 12.7799ZM6.65437 14.5501L6.00791 13.7872L6.00791 13.7872L6.65437 14.5501ZM6.54298 14.6674L7.36379 15.2386L7.36379 15.2386L6.54298 14.6674ZM17.3367 12.8993L16.6442 13.6207L17.3367 12.8993ZM15.6013 11.2333L14.9088 11.9547L14.9088 11.9547L15.6013 11.2333ZM14.9569 11.2287L14.2746 10.4977L14.272 10.5001L14.9569 11.2287ZM11.7424 14.2498L12.4248 14.9809L12.4273 14.9785L11.7424 14.2498ZM11.0881 14.2355L10.3721 14.9337L10.3735 14.9351L11.0881 14.2355ZM11.0796 14.2269L10.363 14.9243L10.3637 14.925L11.0796 14.2269ZM11.0337 14.1823L11.6884 13.4264L11.6884 13.4264L11.0337 14.1823ZM9.46776 12.8259L10.1225 12.0701L10.1225 12.0701L9.46776 12.8259ZM9.42164 12.7811L10.1385 12.084L10.1379 12.0833L9.42164 12.7811ZM9.41339 12.7727L10.1296 12.0748L10.1283 12.0734L9.41339 12.7727ZM8.74612 12.7708L8.03505 12.0677L8.03364 12.0692L8.74612 12.7708ZM16.0496 6.93731V5.93731C15.4973 5.93731 15.0496 6.38503 15.0496 6.93731H16.0496ZM16.3713 6.93731H17.3713C17.3713 6.38503 16.9236 5.93731 16.3713 5.93731V6.93731ZM16.3713 7.20977V8.20977C16.9236 8.20977 17.3713 7.76206 17.3713 7.20977H16.3713ZM16.0496 7.20977H15.0496C15.0496 7.76206 15.4973 8.20977 16.0496 8.20977V7.20977ZM3 6.375H2V17.625H3H4V6.375H3ZM6.375 21V22H17.625V21V20H6.375V21ZM21 17.625H22V6.375H21H20V17.625H21ZM17.625 3V2H6.375V3V4H17.625V3ZM21 6.375H22C22 3.95876 20.0412 2 17.625 2V3V4C18.9367 4 20 5.06332 20 6.375H21ZM17.625 21V22C20.0412 22 22 20.0412 22 17.625H21H20C20 18.9367 18.9367 20 17.625 20V21ZM3 17.625H2C2 20.0412 3.95876 22 6.375 22V21V20C5.06332 20 4 18.9367 4 17.625H3ZM3 6.375H4C4 5.06332 5.06332 4 6.375 4V3V2C3.95875 2 2 3.95875 2 6.375H3ZM8.68771 12.8273L9.33415 13.5903C9.39223 13.541 9.43986 13.4916 9.45049 13.4808L8.73722 12.7799L8.02396 12.079C8.01962 12.0834 8.0176 12.0854 8.01591 12.0871C8.01444 12.0886 8.01464 12.0884 8.01587 12.0872C8.01811 12.085 8.02724 12.0762 8.04127 12.0643L8.68771 12.8273ZM6.65437 14.5501L7.30082 15.3131L9.33417 13.5902L8.68771 12.8273L8.04126 12.0643L6.00791 13.7872L6.65437 14.5501ZM6.54298 14.6674L7.36379 15.2386C7.34241 15.2694 7.32337 15.2904 7.3124 15.3017C7.30176 15.3126 7.29614 15.3171 7.30083 15.3131L6.65437 14.5501L6.00791 13.7872C5.9379 13.8465 5.8245 13.9492 5.72217 14.0962L6.54298 14.6674ZM6.375 15.2029H7.375C7.375 15.2157 7.37106 15.2282 7.36379 15.2386L6.54298 14.6674L5.72217 14.0962C5.49692 14.4199 5.375 14.8059 5.375 15.2029H6.375ZM6.375 17.1563H7.375V15.2029H6.375H5.375V17.1563H6.375ZM6.84375 17.625V16.625C7.13715 16.625 7.375 16.8628 7.375 17.1563H6.375H5.375C5.375 17.9674 6.03258 18.625 6.84375 18.625V17.625ZM17.1562 17.625V16.625H6.84375V17.625V18.625H17.1562V17.625ZM17.625 17.1563H16.625C16.625 16.8628 16.8629 16.625 17.1562 16.625V17.625V18.625C17.9674 18.625 18.625 17.9674 18.625 17.1563H17.625ZM17.625 13.5756H16.625V17.1563H17.625H18.625V13.5756H17.625ZM17.3367 12.8993L16.6442 13.6207C16.6319 13.6089 16.625 13.5926 16.625 13.5756H17.625H18.625C18.625 13.048 18.4099 12.5432 18.0293 12.1779L17.3367 12.8993ZM15.6013 11.2333L14.9088 11.9547L16.6442 13.6207L17.3367 12.8993L18.0293 12.1779L16.2939 10.5119L15.6013 11.2333ZM14.9569 11.2287L15.6392 11.9598C15.433 12.1523 15.1123 12.15 14.9088 11.9547L15.6013 11.2333L16.2939 10.5119C15.7313 9.9718 14.8447 9.96557 14.2746 10.4977L14.9569 11.2287ZM11.7424 14.2498L12.4273 14.9785L15.6417 11.9574L14.9569 11.2287L14.272 10.5001L11.0576 13.5212L11.7424 14.2498ZM11.0881 14.2355L10.3735 14.9351C10.9263 15.4998 11.837 15.5294 12.4248 14.9809L11.7424 14.2498L11.0601 13.5188C11.273 13.3201 11.6021 13.3312 11.8026 13.5359L11.0881 14.2355ZM11.0796 14.2269L10.3637 14.925L10.3721 14.9337L11.0881 14.2355L11.804 13.5374L11.7956 13.5287L11.0796 14.2269ZM11.0337 14.1823L10.379 14.9382C10.366 14.9269 10.3575 14.9186 10.3555 14.9166C10.3543 14.9155 10.3541 14.9153 10.3555 14.9167C10.3571 14.9183 10.3589 14.9202 10.363 14.9243L11.0796 14.2269L11.7963 13.5294C11.7864 13.5193 11.7421 13.4729 11.6884 13.4264L11.0337 14.1823ZM9.46776 12.8259L8.81305 13.5818L10.379 14.9382L11.0337 14.1823L11.6884 13.4264L10.1225 12.0701L9.46776 12.8259ZM9.42164 12.7811L8.70476 13.4783C8.71468 13.4885 8.75911 13.5351 8.81305 13.5818L9.46776 12.8259L10.1225 12.0701C10.1355 12.0814 10.144 12.0897 10.1461 12.0917C10.1472 12.0928 10.1474 12.093 10.146 12.0917C10.1445 12.09 10.1426 12.0881 10.1385 12.084L9.42164 12.7811ZM9.41339 12.7727L8.69718 13.4706L8.70543 13.479L9.42164 12.7811L10.1379 12.0833L10.1296 12.0748L9.41339 12.7727ZM8.74612 12.7708L9.45718 13.474C9.24776 13.6858 8.90708 13.6851 8.69853 13.4719L9.41339 12.7727L10.1283 12.0734C9.55481 11.4872 8.61094 11.4853 8.03506 12.0677L8.74612 12.7708ZM8.73722 12.7799L9.4497 13.4816L9.4586 13.4725L8.74612 12.7708L8.03364 12.0692L8.02474 12.0782L8.73722 12.7799ZM16.0496 6.93731V7.93731H16.3713V6.93731V5.93731H16.0496V6.93731ZM16.3713 6.93731H15.3713V7.20977H16.3713H17.3713V6.93731H16.3713ZM16.3713 7.20977V6.20977H16.0496V7.20977V8.20977H16.3713V7.20977ZM16.0496 7.20977H17.0496V6.93731H16.0496H15.0496V7.20977H16.0496Z" fill="#646371"/>
                    </svg>
                </label>
                {fileName && <p className={'text-[#3F3F49]'}>{fileName}</p>}
            </section>
        </form>
    );
};

export default DailyForm;
