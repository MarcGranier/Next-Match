import { getMemberByUserId } from '@/app/actions/memberActions';
import { CardBody, CardHeader, Divider } from '@nextui-org/react';
import EditForm from './EditForm';
import { getAuthUserId } from '@/app/actions/authActions';
import { notFound } from 'next/navigation';

export default async function MembersEditPage() {
    const userId = await getAuthUserId();

    const member = await getMemberByUserId(userId);

    if (!member) notFound();

    return (
        <>
            <CardHeader className="flex flex-row justify-between items-center">
                <div className="text-2xl font-semibold text-secondary">
                    Edit Profile
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <EditForm member={member} />
            </CardBody>
        </>
    );
}
