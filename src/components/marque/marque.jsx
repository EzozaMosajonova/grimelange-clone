import Marquee from 'react-fast-marquee';

export default function ScrollingBanner() {
    return (
        <div className="bg-black text-white mt-0">
            <Marquee speed={60} direction="right" pauseOnHover={true} gradient={false}>
                <span className="mx-8 font-semibold text-lg">
                    Tüm indirimlere ek sepette %15 indirim!
                </span>
                <span className="mx-8 font-semibold text-lg">
                    Tüm ürünlerde 2 al %10!
                </span>
                <span className="mx-8 font-semibold text-lg">
                    Tüm ürünlerde 3 al %15!
                </span>
                <span className="mx-8 font-semibold text-lg">
                    Tüm ürünlerde 4 al %20!
                </span>
                 <span className="mx-8 font-semibold text-lg">
                    Tüm ürünlerde 2 al %10!
                </span>
            </Marquee>
        </div>
    );
}
