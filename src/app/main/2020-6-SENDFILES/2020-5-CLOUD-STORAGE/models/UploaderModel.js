export const uploaderInterface = (data = {}) => {
	return {
		form_valid: data.form_valid || false,
		description: data.description || '',
		// email_to: data.email_to || null,
		// email_from: data.email_from || null,
		files: data.files || []
	};
};

export const uploaderFormInterface = (data = new uploaderInterface()) => {
	const formData = new FormData();
	formData.append('description', data.description || '');
	// formData.append('email_to', data.email_to || null);
	// formData.append('email_from', data.email_from || null);
	//add files to form
	data.files.map(file => formData.append('files', file));
	return formData;
};
