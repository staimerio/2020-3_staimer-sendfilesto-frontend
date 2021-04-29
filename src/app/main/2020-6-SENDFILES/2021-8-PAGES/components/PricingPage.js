import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import withReducer from 'app/store/withReducer';
import reducer from '../store/reducers';
import { useTranslation } from 'react-i18next';
import PriceCard from './PriceCard';

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

const PricingPage = props => {
	const classes = useStyles(props);
	const { t } = useTranslation('homePage');

	const priceOptions = [
		{
			title: t('OPTION_PRO_TITLE'),
			subtitle: t('OPTION_PRO_SUBTITLE'),
			currency: '$',
			price: '5',
			plan: t('OPTION_PRO_TIME'),
			footerText: '',
			actionText: t('OPTION_PRO_ACTION'),
			features: [
				{
					title: t('ADFREE_DOWNLOAD')
				},
				{
					title: t('PRIORITY_SUPPORT')
				},
				{
					title: t('UNLIMITED_STORAGE')
				},
				{
					title: t('UNLIMITED_SPEED')
				},
				{
					title: t('UNLIMITED_BANDWIDTH')
				}
			],
			actionClick: () => {
				window.location.href = 'https://bit.ly/330Lzma';
			}
		}
	];
	const frequentlyQuestions = [
		{
			title: t('QUESTION_UNLIMITED_BANDWIDTH_TITLE'),
			answer: t('QUESTION_UNLIMITED_BANDWIDTH_ANSWER')
		},
		{
			title: t('QUESTION_FORMATS_TITLE'),
			answer: t('QUESTION_FORMATS_ANSWER')
		},
		{
			title: t('QUESTION_UNLIMITED_BANDWIDTH_TITLE'),
			answer: t('QUESTION_UNLIMITED_BANDWIDTH_ANSWER')
		},
		{
			title: t('QUESTION_UNLIMITED_STORAGE_TITLE'),
			answer: t('QUESTION_UNLIMITED_STORAGE_ANSWER')
		},
		{
			title: t('QUESTION_UNLIMITED_ADFREE_TITLE'),
			answer: t('QUESTION_UNLIMITED_ADFREE_ANSWER')
		}
	];
	return (
		<div>
			<div className={classNames(classes.header, 'flex')}>
				<div className="p-24 w-full max-w-2xl mx-auto">
					<div className="text-center my-128 mx-24">
						<FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
							<Typography variant="h2" color="inherit" className="font-light">
								{t('CHOOSE_YOUR_PLAN')}
							</Typography>
						</FuseAnimate>

						{/* <FuseAnimate duration={400} delay={600}>
							<Typography
								variant="subtitle1"
								color="inherit"
								className="opacity-75 mt-16 mx-auto max-w-512"
							>
								The most advanced customer support tools with a simple and affordable pricing. And you
								can always try for 30 days, free!
							</Typography>
						</FuseAnimate> */}
					</div>
				</div>
			</div>

			<div className="-mt-192">
				<div className="w-full max-w-2xl mx-auto">
					<FuseAnimateGroup
						enter={{
							animation: 'transition.slideUpBigIn'
						}}
						className="flex items-center justify-center flex-wrap"
					>
						{priceOptions.map(option => (
							<PriceCard {...option} />
						))}
					</FuseAnimateGroup>
					<div className="flex flex-col items-center py-96 text-center sm:text-left max-w-xl mx-auto">
						<Typography variant="h4" className="pb-32 font-light">
							{t('FREQUENTLY_QUESTIONS')}
						</Typography>

						<div className="flex flex-wrap w-full">
							{frequentlyQuestions.map(question => (
								<div className="w-full sm:w-1/2 p-24">
									<Typography className="text-20 mb-8">{question.title}</Typography>
									<Typography className="text-16" color="textSecondary">
										{question.answer}
									</Typography>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withReducer('user', reducer)(PricingPage);
