import { showMessage } from 'app/store/actions/fuse';
/**
 * Get a first letter from a string, if the string is empty, then, use a default value
 * @param {string} text
 * @param {string} defaultValue
 */
export const getLetterFromString = (text, defaultValue = 'F') => (text.length ? text.charAt(0) : defaultValue);

/**
 * Show a message like snackbar with a specific duration or default duration, it show error, success or another type
 * @param {string} message : message to show in the snackbar
 * @param {string} variant: kind of snackbar to show
 * @param {*} dispatch: instance of the dispatch
 * @param {int} autoHideDuration: time in milliseconds that the message is showing
 */
export function showSnackbarMessage(message, variant, dispatch, autoHideDuration) {
	dispatch(
		showMessage({
			message,
			variant,
			autoHideDuration,
			anchorOrigin: {
				vertical: 'bottom',
				horizontal: 'right'
			}
		})
	);
}

/**
 * Get a base 64 from a file of the File instance
 * @param {File} file: instance of File to get the base 64 value
 */
export const getBase64 = file => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});
};

/**
 * Set the base64 to content of File list
 * @param {[File]} files: list of the files to assign the base 64 content
 */
export const getFilesContent = files => {
	files.map(file => {
		getBase64(file).then(jsonResults => {
			file.content = jsonResults;
			file.filename = file.name;
		});
		return file;
	});
	return files;
};
/**
 * Get a string value from a size in number format
 * @param {int} size: size in kb
 */
export const getSizeFromBytes = size => {
	const sizeMb = (size / 1024 / 1024).toFixed(2);
	const sizeStr = `${sizeMb}MB`;
	return sizeStr;
};

/**
 * Get a icon from a specific kind of file or return a default icon
 * @param {string} objName
 */
export const getAvatarFromStr = objName => {
	let icon;
	let variant = 'primary';
	switch (objName) {
		case 'pdf':
			icon = 'picture_as_pdf_24px';
			break;
		case 'exe':
		case 'msi':
			icon = 'memory_24px';
			break;
		case 'jpg':
		case 'png':
		case 'jpeg':
		case 'svg':
			icon = 'photo_24px';
			break;
		default:
			icon = 'insert_drive_file_24px';
			break;
	}
	return { icon, variant };
};
