'use client';

import { createPost } from 'portfolio/api/posts';
import React, { useState } from 'react';

const Admin = () => {
	const [data, setData] = useState<{
		name: string;
		link: string;
		desc: string;
		image: null | File | undefined;
	}>({
		name: '',
		link: '',
		desc: '',
		image: null,
	});

	const handleChangeData = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const name = e.target.name;
		const value = e.target.value;
		if (name === 'image') {
			return setData({
				...data,
				image: (e as React.ChangeEvent<HTMLInputElement>).target.files?.[0],
			});
		}
		setData({
			...data,
			[name]: value,
		});
	};

	const handleSendPost = async () => {
		try {
			const formData = new FormData();
			formData.append('name', data.name);
			formData.append('link', data.link);
			formData.append('desc', data.desc);
			formData.append('image', data.image as any);
			await createPost(formData);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className='min-h-screen bg-gradient-to-r from-fuchsia-500 to-cyan-500'>
			<div className='grid place-items-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 py-24'>
				<div className='flex flex-col gap-8 p-8 isolate aspect-video w-96 rounded-xl bg-white/0 shadow-lg ring-1 ring-black/5 backdrop-blur-3xl'>
					<label>
						<p className='text-white'>Name</p>
						<input
							className='bg-transparent text-sm text-white border border-gray-500 rounded-lg p-1 w-full'
							type='text'
							name='name'
							onChange={handleChangeData}
						/>
					</label>
					<label>
						<p className='text-white'>Link</p>
						<input
							className='bg-transparent text-sm text-white border border-gray-500 rounded-lg p-1 w-full'
							type='text'
							name='link'
							onChange={handleChangeData}
						/>
					</label>
					<label>
						<p className='text-white'>Desc</p>
						<textarea
							className='bg-transparent text-sm text-white border border-gray-500 rounded-lg w-full'
							name='desc'
							onChange={handleChangeData}
						/>
					</label>
					<label
						className='block mb-2 text-sm font-medium text-white dark:text-white'
						htmlFor='file_input'
					>
						Upload file
					</label>
					<input
						className='p-1 block w-full text-sm text-white border border-gray-500 rounded-lg cursor-pointer bg-transparent'
						id='file_input'
						type='file'
						name='image'
						onChange={handleChangeData}
					/>
					<button onClick={handleSendPost} className='text-white'>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default Admin;
