export const fileInterface = (data = {}) => {
	return {
		form_valid: data.form_valid || false,
		file: data.file || null,
		filename: data.filename || '',
		code: data.code || null,
		parent: data.parent || null,
		size: data.size || null,
		mimetype: data.mimetype || null,
		extension: data.extension || null,
		created_at: data.created_at || null
	};
};
