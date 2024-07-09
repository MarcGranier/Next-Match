import { UserFilters } from '../types/';

type FilterStste = {
	filters: UserFilters;
	setFilters: (filterName: keyof FilterState['filters'], value: any) => void;
};
