import { MenuOptions } from "@/class/MenuOptions.class";
import { menuOptionsType } from "@/types/menuOptions.type";
import React from 'react'

import {BiSolidHome, BiBookHeart, BiBookAdd, BiSearch} from 'react-icons/bi'


const homeIcon = <BiSolidHome className='h-12 text-xl md:text-base'/>
const colectionIcon = <BiBookHeart className='h-12 text-xl md:text-base'/>
const createIcon = <BiBookAdd className='h-12 text-xl md:text-base'/>
const searchIcon = <BiSearch className='h-12 text-xl md:text-base'/>

const Home = new MenuOptions('Home',"",homeIcon)
Home.setSubMenu(['new','popular','random'])

console.log(Home);


const Create = new MenuOptions('Create','',createIcon)

const Colection = new MenuOptions('Colection','',colectionIcon)

const Search = new MenuOptions('Search','',searchIcon)

export const options :menuOptionsType[] = [

    Search,
    Home,
    Create,
    Colection
]