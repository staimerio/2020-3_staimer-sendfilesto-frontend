import * as http from '@request/http';

import { StorageServices, CacheServices } from '../apps';
import { showSnackbarMessage } from 'app/utils';

import { uploaderFormInterface } from '../../models';

/***************************************************************
 * Variables
 ***************************************************************/
const urlStorageFiles = StorageServices.BaseURL + StorageServices.Files;
const urlStorageFolder = StorageServices.BaseURL + StorageServices.Folder;
const urlDownloadFiles = StorageServices.BaseURL + StorageServices.DownloadFiles;

const urlCacheDownloadFiles = CacheServices.BaseURL + CacheServices.DownloadFiles;

export const SAVE_UPLOADER = '[UPLOADER] SAVE_UPLOADER';
export const SAVED_UPLOADER = '[UPLOADER] SAVED_UPLOADER';
export const SAVE_UPLOADER_ERROR = '[UPLOADER] SAVE_UPLOADER_ERROR';

export const FIND_FOLDER = '[UPLOADER] FIND_FOLDER';
export const GET_FOLDER = '[UPLOADER] GET_FOLDER';
export const GET_FOLDER_ERROR = '[UPLOADER] GET_FOLDER_ERROR';

export const FIND_FILE = '[DOWNLOAD] FIND_FILE';
export const DOWNLOADED_FILE = '[DOWNLOAD] DOWNLOAD_FILE';
export const DOWNLOADED_FILE_ERROR = '[DOWNLOAD] DOWNLOAD_FILE_ERROR';

export const GET_LATEST_FILES = '[FILES] GET_LATEST_FILES';
export const SET_LATEST_FILES = '[FILES] SET_LATEST_FILES';
export const GET_LATEST_FILES_ERROR = '[FILES] GET_LATEST_FILES_ERROR';

export const CLEAR_FOLDER = '[FOLDER] CLEAR_FOLDER';
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
export function downloadFile(file, setProgress, setChecking, setTimer) {
	/*Convert from object to form */
	return async dispatch => {
		dispatch({
			type: FIND_FILE
		});
		try {
			const urlStorage = `${urlDownloadFiles}/${file.code}`;
			const urlCache = `${urlCacheDownloadFiles}/${file.code}`;
			const response = await fetch(urlCache, {
				headers: {
					source: urlStorage
				}
			});
			//check it has any problem
			if (response.status !== 200) throw new Error('Bad request.');

			//set the checking to false
			setTimer(false);
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

/**
 * Get latest files
 * @param {string} folder
 */
export function getLatestFiles() {
	/*Convert from object to form */
	let result = null;
	return async dispatch => {
		dispatch({
			type: GET_LATEST_FILES
		});
		try {
			result = await http.reqGet(urlStorageFiles);

			if (!result.valid) throw Error(result.msg);
			dispatch({
				type: SET_LATEST_FILES,
				payload: result.data
			});
		} catch (error) {
			console.log('error: ', error);
			dispatch({
				type: GET_LATEST_FILES_ERROR
			});
			showSnackbarMessage(error && error.data ? error.data.msg : error?.message || 'Error :(', 'error', dispatch);
		}
	};
}

export function clearFolder() {
	return {
		type: CLEAR_FOLDER
	};
}
