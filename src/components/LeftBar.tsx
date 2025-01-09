import Link from 'next/link'
import React from 'react'
import Image from './Image';

const menuList = [
    {
      id: 1,
      name: "Homepage",
      link: "/",
      icon: "home.svg",
    },
    {
      id: 2,
      name: "Explore",
      link: "/",
      icon: "explore.svg",
    },
    {
      id: 3,
      name: "Notification",
      link: "/",
      icon: "notification.svg",
    },
    {
      id: 4,
      name: "Messages",
      link: "/",
      icon: "message.svg",
    },
    {
      id: 5,
      name: "Bookmarks",
      link: "/",
      icon: "bookmark.svg",
    },
    {
      id: 6,
      name: "Jobs",
      link: "/",
      icon: "job.svg",
    },
    {
      id: 7,
      name: "Communities",
      link: "/",
      icon: "community.svg",
    },
    {
      id: 8,
      name: "Premium",
      link: "/",
      icon: "logo.svg",
    },
    {
      id: 9,
      name: "Profile",
      link: "/",
      icon: "profile.svg",
    },
    {
      id: 10,
      name: "More",
      link: "/",
      icon: "more.svg",
    },
  ];

const LeftBar = () => {
  return (
    <div className='h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8'>
        {/* Logo Menu */}
        <div className='flex flex-col gap-4 text-lg items-start'>
            {/* Logo */}
            <Link href='/' className='p-2 rounded-full hover:bg-inputGray gap-4'>
                <Image path='icons/logo.svg' alt='logo' w={24} h={24} />
            </Link>
            {/* Menu List */}
            <div className='flex flex-col'>
                {menuList.map((item) => (
                    <Link href={item.link} key={item.id} className='p-2 rounded-full hover:bg-inputGray flex ic gap-4' >
                        <Image path={`icons/${item.icon}`} alt={item.name} w={24} h={24} />
                        <span className='hidden lg:inline ml-2'>{item.name}</span>
                    </Link>
                ))}
            </div>
            {/* Button */}
            <Link href='/' className='bg-white text-black rounded-full font-bold w-12 h-12 flex items-center justify-center lg:hidden'>
                <Image path='icons/post.svg' alt='new post' w={24} h={24} />
            </Link>
            <Link href='/' className='hidden lg:block bg-white text-black rounded-full font-bold py-2 px-20 '>Post</Link>
        </div>
        {/* User */}
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 relative rounded-full overflow-hidden'>
              <Image path={"/general/avatar.png"} alt="maya" w={100} h={100} />
            </div>
            <div className='hidden lg:flex flex-col cursor-pointer font-bold'>
              <span className='font-bold'>Maya Tech</span>
              <span className='text-sm text-textGray'>@mayaLangTech</span>
            </div>
          </div>
          <div className='hidden lg:block cursor-pointer font-bold'>...</div>
        </div>
    </div>
  )
}

export default LeftBar