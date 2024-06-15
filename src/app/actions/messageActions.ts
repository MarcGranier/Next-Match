'use server';

import { ActionResult } from '@/types';
import { getAuthUserId } from './authActions';
import { MessageSchema, messageSchema } from '@/lib/schemas/messageSchema';
import { Message } from 'postcss';
import { prisma } from '@/lib/prisma';

export async function createMessage(
	recipientUserId: string,
	data: MessageSchema
): Promise<ActionResult<Message>> {
	try {
		const userId = await getAuthUserId();

		const validated = messageSchema.safeParse(data);

		if (!validated.success)
			return { status: 'error', error: validated.error.errors };

		const { text } = validated.data;

		const message = await prisma.message.create({
			data: {
				text,
				recipientId: recipientUserId,
				senderId: userId,
			},
		});

		return { status: 'success', data: message };
	} catch (error) {
		console.log(error);
		return { status: 'error', error: 'Something went wrong' };
	}
}
