import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

function App() {
	const [value, setValue] = useState('');
	const [fileTitle, setFileTitle] = useState('');

	return (
		<PageContainer>
			<div>
				<h2>약관 입력</h2>
				<StyledReactQuill
					theme="snow"
					value={value}
					onChange={setValue}
					onChangeSelection={(e) => {
						console.log(e);
					}}
				/>
			</div>
			<div>
				<h2>HTML code result</h2>
				<input
					onChange={(e) => {
						setFileTitle(e.target.value);
					}}
					placeholder="파일 제목 입력(기본: 약관파일)"
				/>
				<a
					href={`data:text/html;charset=utf-8, ${encodeURIComponent(value)}`}
					download={`${fileTitle ?? '약관파일'}.html`}
				>
					HTML 파일 다운로드 (클릭)
				</a>
			</div>
		</PageContainer>
	);
}

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 20px;

	h2 {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 12px;
	}

	input {
		width: 100%;
		padding: 8px;
		margin-bottom: 12px;
	}

	a {
		padding: 6px 12px;
		border: 1px solid #000;
		text-decoration: none;
		color: #000;
	}
`;

const StyledReactQuill = styled(ReactQuill)`
	&.quill {
		height: 100%;
	}
	.ql-toolbar {
		position: sticky;
		top: 0;
		z-index: 9999;
		background: #fff;
	}
	.ql-container {
		min-height: 500px;
		max-height: 500px;
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.ql-editor {
		flex: 1;
		overflow-y: auto;
		width: 100%;
	}
`;

export default App;
