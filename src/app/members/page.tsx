import Link from 'next/link';
import { getMembers } from '../actions/memberAction';
import MemberCard from './MemberCard';
import { fetchCurrentUserLikeIds } from '../actions/likeActions';
import PaginationComponent from '@/components/PaginationComponent';

export default async function MembersPage({
	searchParams: { searchParams: UserFilters },
}) {
	const members = await getMembers();
	const likeIds = await fetchCurrentUserLikeIds();

	return (
		<>
			<div className='mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8'>
				{members &&
					members.map((member) => (
						<MemberCard member={member} key={member.id} likeIds={likeIds} />
					))}
			</div>
			<PaginationComponent />
		</>
	);
}
