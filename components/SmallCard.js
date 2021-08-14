import Image from 'next/image';

export default function SmallCard({img,location,distance}) {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl transition transform duration-200 ease-out cursor-pointer hover:bg-gray-100  hover:scale-105">
           <div className="relative h-16 w-16">
            
               <Image src={img.img} layout="fill" className='rounded-lg' />
           </div> 
           <div>
               <h2>{img.location}</h2>
               <h3 className="text-gray-500">{img.distance}</h3>
           </div>
        </div>
    )
}
