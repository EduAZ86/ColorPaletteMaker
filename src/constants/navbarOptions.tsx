import { MenuOptions } from "@/class/MenuOptions.class";

import { menuOptionsType } from "@/types/menuOptions.type";
import React from 'react'

import { BiSolidHome, BiBookHeart, BiBookAdd, BiSearch, BiCog } from 'react-icons/bi'


const homeIcon = <BiSolidHome className='h-12 text-xl md:text-base' />
const colectionIcon = <BiBookHeart className='h-12 text-xl md:text-base' />
const createIcon = <BiBookAdd className='h-12 text-xl md:text-base' />
const settingsIcon = <BiCog className='h-12 text-xl md:text-base' />

const Home = new MenuOptions('Home', '/', homeIcon)
Home.setSubMenu([
    { name: "new" },
    { name: 'popular' },
    { name: 'random' }])


const Create = new MenuOptions('Create', '/create', createIcon)
const Colection = new MenuOptions('Colection', '/colection', colectionIcon)
const Settings = new MenuOptions('Settings', '', settingsIcon)
Settings.setSubMenu([{ name: 'settings' }])

export const options: menuOptionsType[] = [

    Home,
    Create,
    Colection,
    Settings
]