import { getMemberPhotosByUserId } from '@/app/actions/memberActions';
import MemberImage from '@/components/MemberImage';
import { CardBody, CardHeader, Divider, Image } from '@nextui-org/react';

export default async function PhotosPage({
	params,
}: {
	params: { userId: string };
}) {
	const photos = await getMemberPhotosByUserId(params.userId);

	return (
		<>
			<CardHeader className='text-2xl font-semibold test-secondary'>
				Photos
			</CardHeader>
			<Divider />
			<CardBody>
				<div className='grid grid-cols-5 gap-3 p-5'>
					{photos &&
						photos.map((photo) => (
							<div key={photo.id} className='relative'>
								<MemberImage photo={photo} />
							</div>
						))}
				</div>
			</CardBody>
		</>
	);
}
