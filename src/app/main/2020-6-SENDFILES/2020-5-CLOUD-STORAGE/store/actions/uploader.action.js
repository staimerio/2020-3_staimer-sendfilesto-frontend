import * as http from '@request/http';

import { StorageServices } from '../apps';
import { showSnackbarMessage } from 'app/utils';

import { uploaderFormInterface } from '../../models';

/***************************************************************
 * Variables
 ***************************************************************/
const urlStorageFiles = StorageServices.BaseURL + StorageServices.Files;
const urlStorageFolder = StorageServices.BaseURL + StorageServices.Folder;
const urlDownloadFiles = StorageServices.BaseURL + StorageServices.DownloadFiles;

export const SAVE_UPLOADER = '[UPLOADER] SAVE_UPLOADER';
export const SAVED_UPLOADER = '[UPLOADER] SAVED_UPLOADER';
export const SAVE_UPLOADER_ERROR = '[UPLOADER] SAVE_UPLOADER_ERROR';

export const FIND_FOLDER = '[UPLOADER] FIND_FOLDER';
export const GET_FOLDER = '[UPLOADER] GET_FOLDER';
export const GET_FOLDER_ERROR = '[UPLOADER] GET_FOLDER_ERROR';

export const FIND_FILE = '[DOWNLOAD] FIND_FILE';
export const DOWNLOADED_FILE = '[DOWNLOAD] DOWNLOAD_FILE';
export const DOWNLOADED_FILE_ERROR = '[DOWNLOAD] DOWNLOAD_FILE_ERROR';
/***************************************************************
 * Actions
 ***************************************************************/

/**
 * Upload files to storage, send only json object with all information
 * abour the files and his description, email to, email from, etc
 * @param {uploaderInterface} data
 * @param {History} history
 */
export function uploadFiles(dataSend, history) {
	/*Convert from object to form */
	const formData = uploaderFormInterface(dataSend);
	let result = null;
	return async dispatch => {
		dispatch({
			type: SAVE_UPLOADER
		});
		try {
			result = await http.reqPost(urlStorageFiles, formData);

			if (!result.valid) throw Error(result.msg);

			showSnackbarMessage(result.msg, 'success', dispatch, 2000);
			dispatch({
				type: SAVED_UPLOADER,
				payload: result.data
			});

			history.push(`/downloads/${result.data.code}`);
			// dispatch(clearSimcard());
		} catch (error) {
			dispatch({
				type: SAVE_UPLOADER_ERROR
			});
			showSnackbarMessage(error && error.data ? error.data.msg : error?.message || 'Error :(', 'error', dispatch);
		}
	};
}

/**
 * Get files from a specific folder
 * @param {string} folder
 */
export function getFolder(folder) {
	/*Convert from object to form */
	let result = null;
	return async dispatch => {
		dispatch({
			type: FIND_FOLDER
		});
		try {
			result = await http.reqGet(`${urlStorageFolder}/${folder}`);

			if (!result.valid) throw Error(result.msg);
			dispatch({
				type: GET_FOLDER,
				payload: result.data
			});
		} catch (error) {
			dispatch({
				type: GET_FOLDER_ERROR
			});
			showSnackbarMessage(error && error.data ? error.data.msg : error?.message || 'Error :(', 'error', dispatch);
		}
	};
}

/**
 * Download a file from a url
 * @param {string} file: metadata about the file
 */
export function downloadFile(file, setProgress, setChecking) {
	/*Convert from object to form */
	return async dispatch => {
		dispatch({
			type: FIND_FILE
		});
		try {
			const response = await fetch(`${urlDownloadFiles}/${file.code}`);			
			//set the checking to false
			setChecking(false);
			//read the file
			const reader = response.body.getReader();
			const contentLength = +response.headers.get('Content-Length');

			let receivedLength = 0; // received that many bytes at the moment
			let chunks = []; // array of received binary chunks (comprises the body)
			while (true) {
				const { done, value } = await reader.read();

				if (done) {
					break;
				}

				chunks.push(value);
				receivedLength += value.length;
				//set progress
				const progress = (receivedLength / contentLength) * 100;
				setProgress(progress);
			}

			let blob = new Blob(chunks);
			let url = window.URL.createObjectURL(blob);
			let a = document.createElement('a');
			a.href = url;
			a.download = file.filename;
			a.click();

			showSnackbarMessage('File downloaded...', 'success', dispatch, 2000);
			dispatch({
				type: DOWNLOADED_FILE
			});
		} catch (error) {
			dispatch({
				type: DOWNLOADED_FILE_ERROR
			});
			showSnackbarMessage(error.data ? error.data.msg : error.message, 'error', dispatch);
		}
	};
}
