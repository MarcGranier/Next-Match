import { getAuthUserId } from '@/app/actions/authActions';
import {
	getMemberByUserId,
	getMemberPhotosByUserId,
} from '@/app/actions/memberAction';
import DeleteButton from '@/components/DeleteButton';

import StarButton from '@/components/StarButton';
import { CardHeader, Divider, CardBody, Image } from '@nextui-org/react';
import MemberPhotoUpload from './MemberPhotoUpload';
import MemberImage from '@/components/MemberImage';
import ImageUploadButton from '@/components/ImageUploadButton';
import MemberPhotos from '@/components/MemberPhotos';

export default async function PhotosPage() {
	const userId = await getAuthUserId();
	const member = await getMemberByUserId(userId);
	const photos = await getMemberPhotosByUserId(userId);

	return (
		<>
			<CardHeader className='text-2xl font-semibold test-secondary'>
				Edit Profile
			</CardHeader>
			<Divider />
			<CardBody>
				<MemberPhotoUpload />
				<MemberPhotos
					photos={photos}
					editing={true}
					mainImageUrl={member?.image}
				/>
			</CardBody>
		</>
	);
}
