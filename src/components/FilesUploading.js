import React from 'react';
import styled from 'styled-components';
import folder from '../assets/icons/folder.svg';
import document from '../assets/icons/document.svg';

const Container = styled.div`
	width: 280px;
	height: 378px;
	background-color: #ffffff;
	border-radius: 32px;
	padding: 32px 36px;
	box-sizing: border-box;
`;

const IconFile = styled.img`
	display: block;
	margin: 0 auto;
`;

const Title = styled.p`
	font-size: 18px;
	font-weight: 700;
	margin-top: 18px;
	margin-bottom: 44px;
	line-height: 14px;
	opacity: 1;
	text-align: center;
`;

const FileIconContainer = styled.div`
	width: 52px;
	min-width: 52px;
	height: 52px;
	border: 1px solid #000000;
	border-radius: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
`;

const UploadingSection = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 28px;

	h4 {
		margin-bottom: 9px;
	}

	p {
		margin-left: 16px;
		align-self: flex-end;
		margin-bottom: 4px;
	}

	.progressBarSection {
		margin-left: 17px;
		width: 100%;
	}
`;

const Bar = styled.div`
	width: 100px;
	height: 4px;
	border-radius: 20px;
	background-color: #e1d8fe;

	.progress {
		height: 100%;
		border-radius: 20px;
		background: linear-gradient(270deg, #8743ff 0%, #4136f1 100%);
		opacity: 1;
		animation-delay: 0.5s;
	}

	.progress.large {
		width: 62%;
		animation: progressAnimationLarge 3s;
	}

	.progress.medium {
		width: 32%;
		animation: progressAnimationMedium 3s;
	}

	.progress.small {
		width: 21%;
		animation: progressAnimationSmall 3s;
	}

	@keyframes progressAnimationLarge {
		0% {
			width: 5%;
		}
		100% {
			width: 62%;
		}
	}

	@keyframes progressAnimationMedium {
		0% {
			width: 5%;
		}
		100% {
			width: 32%;
		}
	}

	@keyframes progressAnimationSmall {
		0% {
			width: 5%;
		}
		100% {
			width: 21%;
		}
	}
`;

const FilesUploading = () => {
	return (
		<Container>
			<IconFile src={folder} alt='folder' />
			<Title>Files uploading...</Title>
			<UploadingSection>
				<FileIconContainer>
					<img src={document} alt='document' />
				</FileIconContainer>
				<div className='progressBarSection'>
					<h4>design.psd</h4>
					<Bar>
						<div className='progress large'></div>
					</Bar>
				</div>
				<p>50%</p>
			</UploadingSection>
			<UploadingSection>
				<FileIconContainer>
					<img src={document} alt='document' />
				</FileIconContainer>
				<div className='progressBarSection'>
					<h4>resume.docx</h4>
					<Bar>
						<div className='progress medium'></div>
					</Bar>
				</div>
				<p>32%</p>
			</UploadingSection>
			<UploadingSection>
				<FileIconContainer>
					<img src={document} alt='document' />
				</FileIconContainer>
				<div className='progressBarSection'>
					<h4>report.ppt</h4>
					<Bar>
						<div className='progress small'></div>
					</Bar>
				</div>
				<p>21%</p>
			</UploadingSection>
		</Container>
	);
};

export default FilesUploading;
