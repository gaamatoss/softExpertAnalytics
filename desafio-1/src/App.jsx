import React, { useEffect, useState } from 'react';
import AnimalCard from 'src/components/AnimalCard';
import AnimalServices from 'src/utils/AnimalServices';

export default function App() {
	const [list, setList] = useState([]);
	const [filteredList, setFilteredList] = useState([]);
	const [search, setSearch] = useState("");
	const [favorites, setFavorites] = useState([]);

	const handleFavorite = (item) => {
		if (favorites.includes(item)){
			let itemPosition = favorites.indexOf(item, 0)
			favorites.splice(itemPosition, 1)
			setFavorites([...favorites]);
		}else {
			setFavorites([...favorites, item]);
	}
	};

	useEffect(() => {
		AnimalServices
			.getAnimals()
			.then(setList);
	}, []);

	useEffect(() => {
		if (search !== '') {
			let filterSearch = search.toLowerCase();
			let lista = list.filter(item => item.name.toLowerCase().includes(filterSearch));
			setFilteredList(lista);
		}
	}, [search]);

	return (
		<main style={{ display: 'flex', justifyContent: 'space-between' }}>
			<div>
				<table>
					<thead>
						<tr>
							<th colSpan={2}>
								<input type={'text'} value={search} onChange={e => setSearch(e.target.value)} style={{ width: '100%', display: 'block' }} data-testid={'filter'} />
							</th>
						</tr>
						<tr>
							<th>{'Nome'}</th>
							<th>{'⭐️'}</th>
						</tr>
					</thead>
					<tbody>
						{
							search !== '' ? (
								filteredList.map(item => {
									const isFavorite = favorites.find(favorite => item.name === favorite.name);

									return (
										<tr key={item.id} data-testid={'row-data'}>
											<td>{item.name}</td>
											<td>
												<a
													style={{ textDecoration: 'none', color: 'inherit' }}
													href={'#'}
													onClick={() => handleFavorite(item)}
													data-testid={'star'}
												>
													{isFavorite ? '★' : '☆'}
												</a>
											</td>
										</tr>
									);
								})
							) : (
								list.map(item => {
									const isFavorite = favorites.find(favorite => {
										return item.name === favorite.name;
									});

									return (
										<tr key={item.id} data-testid={'row-data'}>
											<td>{item.name}</td>
											<td>
												<a
													style={{ textDecoration: 'none', color: 'inherit' }}
													href={'#'}
													onClick={() => handleFavorite(item)}
													data-testid={'star'}
												>
													{isFavorite ? '★' : '☆'}
												</a>
											</td>
										</tr>
									);
								})
							)
						}
					</tbody>
				</table>
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
				{
					favorites.length > 0 && (
						favorites.map(animals => {
							return (
								<AnimalCard key={animals.id} {...animals} />
							);
						})
					)
				}
			</div>
		</main>
	);
}