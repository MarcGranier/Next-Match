import { auth, signOut } from '@/auth';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { FaRegSmile } from 'react-icons/fa';

export default async function Home() {
	const session = await auth();

	return (
		<div className='flex flex-col justify-center items-center mt-20  gap-6 text-secondary'>
			<h1 className='text-3xl'>Hello app!</h1>

			<h3 className='text-2xl font-semibold'>User session data</h3>
			{session ? (
				<div>
					<pre>{JSON.stringify(session, null, 2)}</pre>
					<form
						action={async () => {
							'use server';

							await signOut();
						}}
					>
						<Button
							type='submit'
							color='secondary'
							variant='bordered'
							startContent={<FaRegSmile size={20} />}
						>
							Sign out
						</Button>
					</form>
				</div>
			) : (
				<div>NotSigned in</div>
			)}
		</div>
	);
}
