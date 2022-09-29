import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './Toast.css'

const Toast = () => {
    const handleToast = () => toast("Congratulation! Your Exercise Completed!");
    return (
        <div className="activity-complete">
            <button onClick={handleToast} className='btn-com'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Toast;