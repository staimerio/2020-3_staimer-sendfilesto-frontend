import React from 'react';
import clsx from 'clsx';

import { ListItemSecondaryAction, IconButton, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
	textWrapper: {
		display: 'flex',
		flexDirection: 'column'
	},
	avat_primary: {
		color: theme.palette.white.main,
		backgroundColor: theme.palette.primary.main
	},
	avat_primary_100: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.primary[100]
	},
	avat_secondary_900: {
		color: theme.palette.white.main,
		backgroundColor: theme.palette.secondary[900]
	}
}));
const CardSuccessFile = item => {
	const classes = useStyles();
	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar
					className={clsx({
						[classes.avat_primary]: item.avatar.variant === 'primary'
					})}
				>
					<Icon>{item.avatar.icon}</Icon>
				</Avatar>
			</ListItemAvatar>
			<div className={classes.textWrapper}>
				<ListItemText primary={item.title} secondary={item.subtitle} />
			</div>
			<ListItemSecondaryAction>
				{item.actions.map(action => {
					return (
						<IconButton {...action}>
							<Icon>{action.icon}</Icon>
						</IconButton>
					);
				})}
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default CardSuccessFile;
