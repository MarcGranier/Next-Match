'use client';

import { usePresenceChannel } from '@/hooks/UsePresenceChannel';
import { useNotificationChannel } from '@/hooks/useNotificationChannel';
import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Providers({
	children,
	userId,
}: {
	children: ReactNode,
	userId: string | null;
}) {
	usePresenceChannel();
	useNotificationChannel(userId);
	return (
		<NextUIProvider>
			<ToastContainer position='bottom-right' className='z-50' />
			{children}
		</NextUIProvider>
	);
}
