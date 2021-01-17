import React from 'react';
import Formsy from 'formsy-react';
import isEmpty from 'lodash/isEmpty';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Paper, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useForm } from '@fuse/hooks';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
// import FieldForm from '@components/formBase/FieldForm';
import Overview from '@components/Overview';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import MainLayoutFab from '@components/MainLayoutFab';

import * as Actions from '../store/actions/';
import { getLetterFromString } from 'app/utils';

const useStyles = makeStyles(theme => {
	// console.log(theme.palette)
	return {
		contentCard: {
			borderRadius: 8,
			width: '100%'
		},
		header: {
			display: 'flex',
			justifyContent: 'center',
			borderBottom: `1px solid ${theme.palette.border}`,
			padding: 8
		},
		input: {
			display: 'none'
		},
		chip: {
			margin: theme.spacing(1)
		},
		content: {
			padding: theme.spacing(1),
			[theme.breakpoints.up('md')]: {
				padding: theme.spacing(2)
			}
		},
		typography: {
			color: theme.palette.primary
		}
	};
});

const Uploader = () => {
	const { uploader, loading } = useSelector(({ storage }) => storage.uploader);

	const { t } = useTranslation('homePage');
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const { form, setForm, handleChange, onInvalid, onValid } = useForm({ ...uploader });

	const onChangeFiles = e => {
		setForm({ ...form, files: [...form.files, ...Array.from(e.target.files)] });
	};

	const handleImage = e => {
		return URL.createObjectURL(e);
	};

	const handleDelete = chipToDelete => () => {
		setForm({ ...form, files: form.files.filter(chip => chip !== chipToDelete) });
	};

	const handleSubmit = async () => {
		if (!form.form_valid || !form.files.length) {
			return dispatch(Actions.validationError(t('ADD_YOUR_FILES_ERROR')));
		}
		dispatch(Actions.uploadFiles({ ...form }, history));
	};

	// const propsEmailTo = {
	// 	id: 'email_to',
	// 	name: 'email_to',
	// 	label: t('EMAIL_TO'),
	// 	md: 6,
	// 	value: form.email_to,
	// 	onChange: handleChange
	// };
	// const propsEmailFrom = {
	// 	id: 'email_from',
	// 	name: 'email_from',
	// 	label: t('EMAIL_FROM'),
	// 	md: 6,
	// 	value: form.email_from,
	// 	onChange: handleChange
	// };

	const propsDescription = {
		id: 'description',
		name: 'description',
		label: t('DESCRIPTION'),
		rows: '4',
		value: form.description,
		maxCount: 280,
		onBlur: handleChange
	};

	const propsInput = {
		accept: '*',
		id: 'files',
		name: 'files',
		type: 'file',
		multiple: true,
		onChange: onChangeFiles
	};

	const propsUploadButtom = {
		id: 'btnUpload',
		type: 'submit',
		disabled: !form.form_valid || !form.files.length,
		onClick: handleSubmit,
		loading: loading,
		loadingText: t('UPLOADING'),
		variant: 'extended',
		label: t('UPLOAD')
	};

	return (
		<Paper elevation={1} className={classes.contentCard}>
			<Formsy onValid={onValid} onInvalid={onInvalid}>
				<div className={`flex flex-wrap w-full`}>
					{/* <FieldForm {...propsEmailTo} />
					<FieldForm {...propsEmailFrom} /> */}
					<Overview {...propsDescription} />
				</div>
				<h2>{t('SUBTITLE')}</h2>
				<Typography display="inline" variant="subtitle1" className={classes.typography}>
					{t('MAX_SIZE')}
				</Typography>
				<header className={classes.header}>
					<input className={classes.input} {...propsInput} />
					<label htmlFor="files">
						<Fab
							variant="extended"
							color="primary"
							aria-label="add"
							className={classes.margin}
							component="span"
						>
							<NavigationIcon className={classes.extendedIcon} />
							{t('ADD_YOUR_FILES')}
						</Fab>
					</label>
				</header>
				<div className={classes.content}>
					{isEmpty(form.files) ? (
						<Typography variant="subtitle1" className={classes.typography}>
							{t('NO_FILES')}
						</Typography>
					) : (
						form.files.map((data, index) => (
							<Chip
								className={classes.chip}
								key={index}
								avatar={<Avatar alt={getLetterFromString(data.name)} src={handleImage(data)} />}
								label={data.name}
								onDelete={handleDelete(data)}
							/>
						))
					)}
				</div>
				<MainLayoutFab {...propsUploadButtom}>
					<Icon>cloud_upload</Icon>
					<Typography className="p-4">{propsUploadButtom.label}</Typography>
				</MainLayoutFab>
			</Formsy>
		</Paper>
	);
};
export default Uploader;
