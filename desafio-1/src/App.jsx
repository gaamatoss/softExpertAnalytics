import React, { useEffect, useState } from 'react';
import AnimalCard from 'src/components/AnimalCard';
import AnimalServices from 'src/utils/AnimalServices';

function App() {
	const [list, setList] = useState([]);
	const [filteredList, setFilteredList] = useState([]);
	const [search, setSearch] = useState("");
	const [favorites, setFavorites] = useState([]);

	const handleFavorite = (item) => {
		const newFavorites = [...favorites, item];

		setFavorites(newFavorites);
	};

	useEffect(() => {
		AnimalServices
			.getAnimals()
			.then(setList);
	}, []);

	useEffect(() => {
		if (search !== '') {
			var lista = list.filter(item => item.name.includes(search));
	
			setFilteredList(lista);
		}
	}, [search, filteredList]);

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
							<th>{ 'Nome' }</th>
							<th>{ '⭐️' }</th>
						</tr>
					</thead>
					<tbody>
						{
							search !== '' ? (
								filteredList.map(item => {
									const isFavorito = favorites.find(favorito => item.name === favorito.name);

									return (
										<tr data-testid={'row-data'}>
											<td>{item.name}</td>
											<td>
												<a
													style={{ textDecoration: 'none', color: 'inherit' }}
													href={'#'}
													onClick={() => handleFavorite(item)}
													data-testid={'star'}
												>
													{ isFavorito ? '★' : '☆' }
												</a>
											</td>
										</tr>
									);
								})
							) : (
								list.map(item => {
									const isFavorito = favorites.find(favorito => {
										return item.name === favorito.name;
									});

									return (
										<tr data-testid={'row-data'}>
											<td>{item.name}</td>
											<td>
												<a
													style={{ textDecoration: 'none', color: 'inherit' }}
													href={'#'}
													onClick={() => handleFavorite(item)}
													data-testid={'star'}
												>
													{ isFavorito ? '★' : '☆' }
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
						favorites.map(item => {
							const animal = { ...item };

							return (
								<AnimalCard {...animal} />
							);
						})
					)
				}
			</div>
		</main>
	);
}

export default App;