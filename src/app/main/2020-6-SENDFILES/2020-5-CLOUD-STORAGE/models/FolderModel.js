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
