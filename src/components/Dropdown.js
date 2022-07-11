import NextLink from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function Dropdown() {
  return (
    <Menu as="div" className="sm:hidden mx-2 h-full align-stretch sm:m-4">
      <div>
        <Menu.Button className="p-6 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <NextLink href={`/explorer`} passHref key={"explorer"}>
                <a className="first-letter:bg-gray-100 text-gray-900  block px-4 py-2 text-sm">
                  Explorer
                </a>
              </NextLink>
            </Menu.Item>
            <Menu.Item>
              <NextLink
                href={`https://github.com/crypblizz8/zdk-starter-kit`}
                passHref
                key={"code"}
              >
                <a
                  target="_blank"
                  className="first-letter:bg-gray-100 text-gray-900  block px-4 py-2 text-sm"
                >
                  Code
                </a>
              </NextLink>
            </Menu.Item>
            <Menu.Item>
              <NextLink
                href={`https://docs.zora.co/docs/zora-api/zdk`}
                passHref
                key={"docs"}
              >
                <a
                  target="_blank"
                  className="first-letter:bg-gray-100 text-gray-900  block px-4 py-2 text-sm"
                >
                  Docs
                </a>
              </NextLink>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
