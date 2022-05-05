import { ToastBar, toast } from 'react-hot-toast';
export const TOAST_CONFIGS = {
	position: 'top-center',
};

//use the below function to use your own modified version
export function CustomToaster(t) {
	return (
		<ToastBar toast={t}>
			{/* make changes here to build your own custom toaster */}
			{/* {({ icon, message }) => (
				<>
					{icon}
					{message}
					{t.type !== 'loading' && <button onClick={() => toast.dismiss(t.id)}>X</button>}
				</>
			)} */}
		</ToastBar>
	);
}

const overrides = {
	success: toast.success,
	error: toast.error,
};

export default overrides;
