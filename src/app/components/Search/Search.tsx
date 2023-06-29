"use client"

import classes from './Search.module.scss'
import cn from 'classnames'
import { ISearch } from './SearchTypes'
import { useState, KeyboardEvent, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'
import Input from '../Input/Input'
import Buttons from '../Buttons/Buttons'
import SearchIcon from '../../assets/images/search.svg'

const Search: React.FC<ISearch> = ({ className, ...props }) => {
	const [search, setSearch] = useState<string>('');
 const router = useRouter();
 
 const onSearch = () => {
		router.push('/search');
	};

 const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			onSearch();
  }
  if (e.key === 'Escape') {
   setSearch("")
  }
 };
 
 return (
  <form className={cn(className, classes.search)} {...props} role="search">
  <Input
   className={classes.input}
   placeholder="Search..."
   value={search}
   onChange={(e:ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
   onKeyDown={handleKeyDown}
  />
  <Buttons
   appearance="primary"
   className={classes.button}
   onAction={onSearch}
   aria-label="Искать по сайту"
  >
   <SearchIcon />
  </Buttons>
 </form>
 )
}

export default Search