import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({exploreData,cardsData}) {
  return (
    <div className="">
      <Head>
        <title>AirB&B</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*header*/}
      <Header/>
      {/* banner */}
      <Banner/>
      <main className='max-w-7xl mx-auto px-8 sm:px-16 '>
        <section className='pt-6 '>
          <h2 className='text-4xl font-semibold'>Explore Nearby</h2>

          {/* pull some data from server */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData.map((img,distance,location) => (
           <SmallCard key={img} img={img} distance={distance} location={location}/>
          ))}
          </div>
          

        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live anywhere</h2> 
          {cardsData.map(item => (
           <MediumCard key={item.img} img={item.img} title={item.title}/>
          ))}
        </section>
      </main>
     

    
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').
  then((res)=>res.json()
  );

  const cardsData =await  fetch('https://links.papareact.com/zp1').
  then((res)=>res.json())

  return{
    props:{
      exploreData,
      cardsData
    }
  }

}
