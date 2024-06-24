import CardInnerWrapper from '@/components/CardInnerWrapper';
import ChatForm from './ChatForm';
import { getMessageThread } from '@/app/actions/messageActions';
import { getAuthUserId } from '@/app/actions/authActions';

export default async function ChatPage({
	params,
}: {
	params: { userId: string };
}) {
	const userId = await getAuthUserId();
	const messages = await getMessageThread(params.userId);
	console.log(messages);
	return (
		<CardInnerWrapper
			header='Chat'
			body={<div>Chat goes here</div>}
			footer={<ChatForm />}
		/>
	);
}
