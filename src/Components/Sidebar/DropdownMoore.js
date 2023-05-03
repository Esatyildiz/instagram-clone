import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { Icon } from '../../icon';
import { logaut } from '../../firebase.js';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropdownMoore({ open }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="px-3 py-3 mb-[2px] rounded-3xl duration-150 ease-linear flex items-center w-full text-link gap-x-4 font-normal group hover:bg-linkHover">
                <div className='group-hover:scale-[1.1] duration-150'>
                    <Icon name="more" />
                </div>
                {!open &&
                    <span>Daha Fazla</span>
                }
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute   top-auto bottom-full origin-bottom z-50 bg-white mt-2 w-[238px]  rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="#"
                                    className={classNames(
                                        active ? 'bg-linkHover' : '',
                                        'px-4 py-3  flex items-center justify-between text-base font-normal  border-b border-[#dbdbdb]'
                                    )}
                                >
                                    Ayarlar
                                    <Icon name="ayarlar" />
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="#"
                                    className={classNames(
                                        active ? 'bg-linkHover' : '',
                                        'px-4 py-3  flex items-center justify-between text-base font-normal  border-b border-[#dbdbdb]'
                                    )}
                                >
                                    Hareketlerim
                                    <Icon name="moves" />
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="#"
                                    className={classNames(
                                        active ? 'bg-linkHover' : '',
                                        'px-4 py-3  flex items-center justify-between text-base font-normal  border-b border-[#dbdbdb]'
                                    )}
                                >
                                    Kaydedilenler
                                    <Icon name="kaydet" />
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="#"
                                    className={classNames(
                                        active ? 'bg-linkHover' : '',
                                        'px-4 py-3  flex items-center justify-between text-base font-normal  border-b border-[#dbdbdb]'
                                    )}
                                >
                                    Görünümü değiştir
                                    <Icon name="gorunum" />
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="#"
                                    className={classNames(
                                        active ? 'bg-linkHover' : '',
                                        'px-4 py-3  flex items-center justify-between text-base font-normal  border-b border-[#dbdbdb]'
                                    )}
                                >
                                    Bir sorun bildir
                                    <Icon name="sorun" />
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="#"
                                    className={classNames(
                                        active ? 'bg-linkHover' : '',
                                        'px-4 py-3  flex items-center justify-between text-base font-normal  border-b border-t-[6px]'
                                    )}
                                >
                                    Hesap Değiştir
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    type='button'
                                    onClick={logaut}
                                    className={classNames(
                                        active ? 'bg-linkHover' : '',
                                        'px-4 py-3  flex items-center w-full justify-between text-base font-normal  '
                                    )}
                                >
                                    Çıkış yap
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
