import React, {useEffect} from "react";
import ReactDOM from "react-dom";

function Modal({
                         children,
                         showBackdrop = true,
                     }: {
    children: React.ReactNode;
    className?: string;
    showBackdrop?: boolean;
}) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return ReactDOM.createPortal(
        <div
            className={`fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-40 ${showBackdrop ? 'bg-opacity-10' : 'bg-opacity-0'}`}>
                {children}
        </div>,
        document.body
    );
}

export default Modal;
