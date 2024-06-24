'use client';

import { MessageDto } from '@/types';
import { Table, TableBody, TableColumn, TableHeader } from '@nextui-org/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

type Props = {
	messages: MessageDto[];
};

export default function MessageTable({ messages }: Props) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const isOutbox = searchParams.get('container') === 'outbox';
	const [isDeleting, setDeleting] = useState({ id: '', loading: false });

	const columns = [
		{
			key: isOutbox ? 'recipientName' : 'senderName',
			label: isOutbox ? 'Recipient' : 'Sender',
		},
		{ key: 'text', label: 'Message' },
		{ key: 'created', label: isOutbox ? 'Date sent' : 'Date received' },
		{ key: 'actions', label: 'Actions' },
	];

	<Table
		aria-label='Table with messages'
		selectionMode='single'
		onRowAction={(key) => handleRowSelect(key)}
		shadow='none'
	></Table>;
}
