import { CardBody, CardHeader, Divider } from '@nextui-org/react';
import EditForm from './EditForm';
import { getAuthUserId } from '@/app/actions/authActions';
import { getMemberByUserId } from '@/app/actions/memberAction';
import { notFound } from 'next/navigation';

export default async function MembersEditPage() {
	const userId = await getAuthUserId();

	const member = getMemberByUserId(userId);

	if (!member) notFound();

	return (
		<>
			<CardHeader className='text-2xl font-semibold test-secondary'>
				Edit Profile
			</CardHeader>
			<Divider />
			<CardBody>
				<EditForm member={member} />
			</CardBody>
		</>
	);
}
