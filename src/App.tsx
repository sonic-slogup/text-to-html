import React, { useState, useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function App() {
	const [value, setValue] = useState('');
	const [fileTitle, setFileTitle] = useState('');

	const defaultStyleElement = useMemo(
		() => `<style>
    table, tr, td {
        border: 1px solid #000;
		border-collapse: collapse;   
    }
	td {
		padding: 8px;
	}
</style>`,
		[],
	);

	return (
		<PageContainer>
			<div>
				<h2 className="title">약관 입력</h2>
				<CKEditor
					editor={ClassicEditor}
					data={value}
					onReady={(editor) => {
						// You can store the "editor" and use when it is needed.
						console.log('Editor is ready to use!', editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						console.log({ event, editor, data });
						setValue(data);
					}}
					onBlur={(event, editor) => {
						console.log('Blur.', editor);
					}}
					onFocus={(event, editor) => {
						console.log('Focus.', editor);
					}}
				/>
			</div>
			<div>
				<h2 className="title">HTML code result</h2>
				<input
					onChange={(e) => {
						setFileTitle(e.target.value);
					}}
					placeholder="파일 제목 입력(기본: 약관파일)"
				/>
				<a
					href={`data:text/html;charset=utf-8, ${encodeURIComponent(
						defaultStyleElement + value,
					)}`}
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

	.title {
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

	.ck-content {
		min-height: 500px;
		max-height: 500px;
	}
`;

export default App;
