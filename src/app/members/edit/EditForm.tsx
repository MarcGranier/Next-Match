'use client';
import { memberEditSchema } from '@/lib/schemas/memberEditSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Member } from '@prisma/client';
import { useForm } from 'react-hook-form';

type Props = {
	member: Member;
};

export default function EditForm({ member }: Props) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isValid, isDirty, isSubmitting },
	} = useForm({
		resolver: zodResolver(memberEditSchema),
	});

	return <div>EditForm</div>;
}
