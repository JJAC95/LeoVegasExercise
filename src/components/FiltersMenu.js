import { Disclosure, Transition } from '@headlessui/react';
import { Filters } from './Filters';
import '../styles/filtersMenu.css';
export const FiltersMenu = ({ games, setFilters }) => {
	return (
		<div className="discContainer">
			<Disclosure
				as="section"
				arial-labelledby="filter-heading"
				className="disclosure"
			>
				<div className="discHeaderContainer">
					<div className="discButtonContainer">
						<Disclosure.Button className="discButton">
							Filters
						</Disclosure.Button>
					</div>
				</div>
				<Transition
					enter="transitionOpen"
					enterFrom="transitionOpenFrom"
					enterTo="transitionOpenTo"
					leave="transitionClose"
					leaveFrom="transitionCloseFrom"
					leaveTo="transitionCloseTo"
				>
					<Disclosure.Panel className="panel">
						<Filters games={games} setFilters={setFilters} />
					</Disclosure.Panel>
				</Transition>
			</Disclosure>
		</div>
	);
};
