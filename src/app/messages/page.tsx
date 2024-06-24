import MessageSidebar from './MessageSidebar';

export default function MessagesPage() {
	return (
		<div className='grid grid-cols-12 gap-5 h-[80v] mt-10'>
			<div className='col-span-2'>
				<MessageSidebar />
			</div>
			<div className='col-span-10'>Message table gores here</div>
		</div>
	);
}
