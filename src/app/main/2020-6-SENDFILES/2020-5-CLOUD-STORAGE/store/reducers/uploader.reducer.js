import * as Actions from '../actions/uploader.action';
import * as models from '../../models';

const initialState = {
	loading: false,
	loadingFiles: false,
	uploader: new models.uploaderInterface(),
	folder: new models.folderInterface(),
	filesList: []
};

const uploaderReducer = function (state = initialState, action) {
	switch (action.type) {
		// case Actions.SET_UPLOADER: {
		// 	return {
		// 		...state,
		// 		uploader: {
		// 			...new models.uploaderInterface({
		// 				...action.payload
		// 			})
		// 		}
		// 	};
		// }
		case Actions.GET_LATEST_FILES: {
			return {
				...state,
				loadingFiles: true
			};
		}
		case Actions.GET_LATEST_FILES_ERROR: {
			return {
				...state,
				loadingFiles: false
			};
		}
		case Actions.FIND_FOLDER:
		case Actions.SAVE_UPLOADER: {
			return {
				...state,
				loading: true
			};
		}
		case Actions.DOWNLOADED_FILE:
		case Actions.DOWNLOADED_FILE_ERROR: {
			return {
				...state,
				loading: false
			};
		}
		case Actions.GET_FOLDER_ERROR:
		case Actions.SAVE_UPLOADER_ERROR:
			return {
				...state,
				...initialState
			};
		case Actions.GET_FOLDER:
		case Actions.SAVED_UPLOADER: {
			return {
				...state,
				loading: false,
				folder: new models.folderInterface({
					...action.payload
				})
			};
		}
		case Actions.SET_LATEST_FILES: {
			const { files } = action.payload;
			const filesUniqueFolder = files.reduce((acc, file) => {
				if (!acc.find(item => item.folder === file.folder)) acc.push(file);
				return acc;
			}, []);
			return {
				...state,
				loadingFiles: false,
				filesList: filesUniqueFolder.map(file => new models.filesInterface(file))
			};
		}
		case Actions.CLEAR_FOLDER: {
			return {
				...initialState
			};
		}
		// case Actions.CLEAR_UPLOADER: {
		// 	return {
		// 		...state,
		// 		uploader: {
		// 			...initialState.uploader
		// 		}
		// 	};
		// }
		default: {
			return state;
		}
	}
};

export default uploaderReducer;
