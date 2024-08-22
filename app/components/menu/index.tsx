'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState, useMemo, useEffect} from 'react';
import useGetDevice from 'Lib/get-devices'
import styles from 'Styles/menu.module.scss';
import Image from "next/image";
import RoinoLogo from 'Image/header/roino.png'
import CloseMenuLogo from 'Icon/header/home.svg'
import OpenMenuLogo from 'Icon/header/menu.svg'
import SearchLogo from 'Icon/header/search-normal.png'
import HomeLogo from 'Icon/header/home.svg'
import CategoryLogo from 'Icon/header/category.svg'
import HeadphoneLogo from 'Icon/header/headphone.svg'
import TeacherLogo from 'Icon/header/teacher.svg'
import HappyLogo from 'Icon/header/happyemoji.svg'
import UserLogo from 'Icon/header/user.png'


interface ItemsMenu {
    name: string,
    url: string,
    icon: string
}

const itemsMenu: ItemsMenu[] = [
    {
        name: 'خانه',
        url: '/',
        icon: HomeLogo
    },
    {
        name: 'سرویس ها',
        url: '/services',
        icon: CategoryLogo
    },
    {
        name: 'بلاگ',
        url: '/blog',
        icon: TeacherLogo
    },
    {
        name: 'ارتباط با ما',
        url: '/contact-us',
        icon: HeadphoneLogo
    },
    {
        name: 'درباره ما',
        url: '/aboutUs',
        icon: HappyLogo
    },
]

// roino logo as component
const Logo = ({width = 'w-20', height = 'h-auto', customClass = ''}) => {
    return (
        <Link href='/'>
            <Image src={RoinoLogo} alt="روینو" className={`${width + ' ' + height + ' ' + customClass} pt-2`}/>
        </Link>
    )
}



const Menu = () => {
    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState(undefined);
    const {getDevice} = useGetDevice();
    // Change show class menu form status state
    const activeMenuClass = useMemo(() => {
        switch (openMenu) {
            case true:
                return 'right-0 left-0';
            case false:
                return 'left-full';
            default:
                return '';
        }
    }, [openMenu]);

    useEffect(() => {
        // Set openMenu based on device width
        (getDevice() === 'sm' || getDevice() === 'md') ? setOpenMenu(false) : setOpenMenu(undefined)
    }, [getDevice])

    return (
        <>
            {/* open button */}
            <div className="bg-white flex justify-between lg:hidden bg-main gap-3 py-1 px-4">
                <Logo/>
                {/* open menu and login */}
                <div className="flex items-center gap-3">

                    <button className="bg-main p-2 rounded-md" onClick={() => setOpenMenu(true)}>
                        <OpenMenuLogo/>
                    </button>
                </div>
            </div>
            <div
                className={`bg-white fixed top-0 bottom-0 z-30 lg:relative lg:flex items-center justify-between py-4 px-6 transition-all duration-500 ease-in-out ${activeMenuClass}`}>
                <div className="block lg:flex justify-between items-center w-full">
                    <div className="block lg:flex w-full">
                        {/* logo and close button menu */}
                        <div className="flex justify-between items-center">
                            <Logo customClass="lg:ml-20"/>

                            <button className="p-2 bg-main rounded-md block lg:hidden"
                                    onClick={() => setOpenMenu(false)}>
                                <OpenMenuLogo/>
                            </button>
                        </div>
                        {/* items menu */}
                        <section className="w-full flex lg:justify-center lg:absolute items-center top-0 left-0">
                            <div className="lg:flex items-center gap-3 py-3">
                                {itemsMenu.map((item, index) => (
                                    <Link href={item.url} key={index}
                                        className={`${styles.menu} ${pathname === item.url ? styles.active : ''} flex items-center lg:justify-center py-4 px-0 lg:px-4 `}>
                                        <item.icon size={21}/>
                                        <p className="pr-3 lg:pr-2.5">{item.name}</p>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu