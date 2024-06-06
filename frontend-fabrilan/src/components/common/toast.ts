import { toast, ToastOptions } from 'react-toastify';

export const showToast = (message: string, options?: ToastOptions) => {
  toast(message, options);
};

export const showSuccessToast = (message: string) => {
  toast.success(message);
};

export const showErrorToast = (message: string) => {
  toast.error(message);
};

export const showWarningToast = (message: string) => {
  toast.warning(message);
};