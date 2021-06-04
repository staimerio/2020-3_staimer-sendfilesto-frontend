export const folderInterface = (data = {}) => {
	return {
		form_valid: data.form_valid || false,
		folder: data.folder || null,
		code: data.code || null,
		created_at: data.created_at || null,
		description: data.description || '',
		parent: data.parent || null,
		error: data.error || [],
		success: data.success || []
	};
};
export const filesInterface = (data = {}) => {
	return {
		file: data.file || null,
		width: data.width || null,
		extension: data.extension || null,
		created_at: data.created_at || null,
		height: data.height || null,
		code: data.code || null,
		filename: data.filename || null,
		parent: data.parent || null,
		size: data.size || null,
		title: data.title || null,
		mimetype: data.mimetype || '',
		folder: data.folder || null,
		description: data.description || '',
		credential: data.credential || null,
		platform: data.platform || null
	};
};
