import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
const Footer = () => {
    return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
    text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row
            justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                    <Link href='/?category=Garland'>Garland</Link>
                    <Link href='/?category=Flower'>Flower</Link>
                    <Link href='/?category=Incense%20sticks%20and%20candles'>Incense sticks and candles</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Customer Service</h3>
                    <Link href='https://beautiful-heliotrope-e92600.netlify.app/'>Contact Us</Link>
                </FooterList>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-base font-bold mb-2">About Us</h3>
                <p className="mb-2">We are Jae Im Shop an old flower and garland shop that has been selling for 50 years and is well known within Ban Bua Thong Village.</p>
                <p>&copy;  {new Date().getFullYear()} Jay Im. All rights reserved.</p>
                </div>
                <FooterList>
                <h3 className="text-base font-bold mb-2">Follow Us</h3>
                <div className="flex gap-2">
                <Link href='https://www.facebook.com/'>
                    <MdFacebook size={24}/>
                </Link>
                <Link href='https://twitter.com/account/access'>
                    <AiFillTwitterCircle size={24}/>
                </Link>
                <Link href='https://www.instagram.com/'>
                    <AiFillInstagram size={24}/>
                </Link>
                <Link href='https://www.youtube.com/'>
                    <AiFillYoutube size={24}/>
                </Link>
                </div>
                </FooterList>
            </div>
        </Container>
    </footer>
    );
};
 
export default Footer;