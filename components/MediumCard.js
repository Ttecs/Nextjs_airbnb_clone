import Image from 'next/image'
export default function MediumCard({img,title}) {
    return (
        <div className='relative h-80 w-80'>
            <Image src={img} layout='fill'/>
        </div>
    )
}
