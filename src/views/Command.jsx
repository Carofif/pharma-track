import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/global/Header';
import { selectLogged } from '../redux/slices/logSlice';

function Command() {
  let log = useSelector(selectLogged);
  let navigate = useNavigate()
	return (
		<div className='space-y-7'>
			<Header>
				<section className='space-y-7'>
					<h1 className='text-3xl font-bold'>Commander</h1>

					<div
						onClick={() => {
							navigate(-1);
						}}
						className='flex gap-2 items-center cursor-pointer max-w-fit'
					>
						<ChevronLeftIcon className='w-4 h-4' />
						<p>Retour</p>
					</div>
				</section>
			</Header>

			{log ? (
				<section></section>
			) : (
				<section>
					<p>
						Veuillez vous connecter avant de pouvoir effectuer cette opération
					</p>
				</section>
			)}
		</div>
	);
}

export default Command;
