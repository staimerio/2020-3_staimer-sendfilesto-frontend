import React from 'react';
import {  Button, Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
	header: {
		height: 500,
		background:
			'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.main + ' 100%)',
		color: theme.palette.primary.contrastText
	},
	badge: {
		backgroundColor: theme.palette.error.main,
		color: theme.palette.getContrastText(theme.palette.error.main)
	},
	price: {
		backgroundColor: theme.palette.primary[600],
		color: theme.palette.getContrastText(theme.palette.primary[600])
	}
}));

const PriceCard = ({
	title,
	subtitle,
	currency,
	price,
	plan,
	footerText,
	actionText,
	actionClick = () => {},
	features = [],
	...props
}) => {
	const classes = useStyles(props);
	return (
		<div className="w-full max-w-320 sm:w-1/3 p-12">
			<Card className="relative" raised>
				<div className="p-32 text-center">
					<Typography className="text-32">{title}</Typography>
					<Typography color="textSecondary" className="text-16 font-medium">
						{subtitle}
					</Typography>
				</div>

				<CardContent className="text-center p-0">
					<div className={classNames(classes.price, 'flex items-end justify-center py-16 px-32')}>
						<div className="flex justify-center">
							<Typography color="inherit" className="font-medium">
								{currency}
							</Typography>
							<Typography color="inherit" className="text-32 ml-4 mr-8 font-light leading-none">
								{price}
							</Typography>
						</div>
						<Typography color="inherit">{plan}</Typography>
					</div>

					<div className="flex flex-col p-32">
						{features.map(feature => (
							<Typography color="textSecondary" className="mb-16">
								{feature.title}
							</Typography>
						))}
					</div>
				</CardContent>

				<div className="flex flex-col items-center justify-center pb-32 px-32">
					<Button variant="contained" color="secondary" className="w-full" onClick={actionClick}>
						{actionText}
					</Button>
					<Typography color="textSecondary" className="mt-16">
						{footerText}
					</Typography>
				</div>
			</Card>
		</div>
	);
};

export default PriceCard;
