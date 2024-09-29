import { getMemberPhotosByUserId } from '@/app/actions/memberActions';
import MemberImage from '@/components/MemberImage';
import { CardBody, CardHeader, Divider } from '@nextui-org/react';
import MemberPhotos from '@/components/MemberPhotos';

export default async function PhotosPage({
    params,
}: {
    params: { userId: string };
}) {
    const photos = await getMemberPhotosByUserId(params.userId);

    return (
        <>
            <CardHeader className="text-2xl font-semibold test-secondary">
                Photos
            </CardHeader>
            <Divider />
            <CardBody>
                <MemberPhotos photos={photos} />
            </CardBody>
        </>
    );
}
