'use client'
import Image from 'next/image'
import Link from 'next/link'

function MainHeader() {
    return (
        <div className="flex flex-1 items-center">
            <Link href={'/'}>
                <img
                    className="m-3 "
                    src={
                        'data:image/svg+xml;utf8,%3Csvg%20width%3D%22180%22%20height%3D%2260%22%20viewBox%3D%220%200%20180%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Crect%20width%3D%22180%22%20height%3D%2260%22%20fill%3D%22white%22%3E%3C%2Frect%3E%0A%20%20%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2232%22%20font-weight%3D%22bold%22%20fill%3D%22black%22%3E%0A%20%20%20%20PHB.COM%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E%0A'
                    }
                    alt="로고"
                    width={150}
                    height={100}
                />
            </Link>
            <div className="relative w-full pl-5">
                <input type="text" className="bg-gray-100 rounded-full w-full pl-5 pr-4 py-2" />
                <button className="absolute inset-y-0 right-4 flex items-center ">
                    <Image src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1" width={24} height={24} />
                </button>
            </div>
            {/* <div className="relative p-2"> */}
            <Image
                className=" m-2"
                width={22}
                height={22}
                src="https://img.icons8.com/fluency-systems-regular/48/chatbot.png"
                alt="chatbot"
            />
            <Link href={'/cart'} className="m-2">
                <Image
                    width={36}
                    height={36}
                    src="https://img.icons8.com/windows/32/shopping-cart.png"
                    alt="shopping-cart"
                />
            </Link>
        </div>
    )
}

export default MainHeader
