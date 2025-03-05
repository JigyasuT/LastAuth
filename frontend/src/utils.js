import { toast } from 'react-toastify';

export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right'
    })
}

export const handleError = (msg) => {
    toast.error(msg, {
        position: 'top-right'
    })
}

// export const handleError = (err) => {
//     const msg = typeof err === 'string' ? err : err.message || 'An error occurred';
//     toast.error(msg, { position: 'top-right' });
// }
