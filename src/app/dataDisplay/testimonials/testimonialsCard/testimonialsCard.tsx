import Image from 'next/image'

type testimonialsCardType = {
    imgUrl: string
    imgWidth: number
    name: string
    subtext: string
    text: string
}

export default function TestimonialsCard({
    imgUrl,
    name,
    subtext,
    text,
    imgWidth,
}: Readonly<testimonialsCardType>) {
    return (
        <ul className="testimonials-content-child">
            <li className="testimonials-info-content">
                <div className="testimonials-info-content-topimg">
                    <Image
                    id='testimonials-img-id'
                        width={imgWidth}
                        height={50}
                        src={`${imgUrl}`}
                        alt="This is an company logo"
                    />
                </div>
                <div className="testimonials-info-content-bottomtext">
                    <Image
                        width={60}
                        height={15}
                        src="/testimonials/testimonial-line.png"
                        alt="This is an testimonial-line"
                    />
                    <h3>{name}</h3>
                    <p>{subtext}</p>
                </div>
            </li>
            <li className="testimonials-content-text-con">
                <p>{text}</p>
            </li>
            <li className="testimonials-content-quote">
                <Image
                    width={140}
                    height={100}
                    src="/testimonials/quote.png"
                    alt="This is an Quote"
                />
            </li>
        </ul>
    )
}
