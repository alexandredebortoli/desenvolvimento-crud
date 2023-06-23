import React from "react";

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
    return (
        <div>
            <div
                className={`modal ${modalOpen ? "modal-open" : ""} text-center`}
            >
                <div
                    onClick={() => setModalOpen(false)}
                    className="modal-toggle w-full h-full"
                />
                <div className="modal-box relative">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
