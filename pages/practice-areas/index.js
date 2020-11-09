import Main from '../../components/Container';
import Nav from '../../components/Nav';
import Footer from '../../components/footer';
import { getAllPages } from '../../lib/api';
import Head from 'next/head';
import Link from 'next/link';

export default function practiceAreas({pages}) {
    return(
        <>    
        <Head>
            <title>Yancy Carter - Practice Areas</title>
            <link rel="stylesheet" href="https://use.typekit.net/pou0knh.css"></link>
        </Head>
            <Main>
                <Nav />
            <div style={{marginTop:45}}>
            <h1>Practice Areas</h1>
               {pages.map( page => {
                   return (
                       <div key={page.title}>
                           <Link href="practice-areas/[slug]" as={`practice-areas/${page.slug}`}>
                                <h3 className='areas-link'>{page.title}</h3>
                           </Link> 
                       </div>
                   )
               })}
            </div>
               

            </Main>
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const page = getAllPages([
        'title',
        'slug'
    ]);

    return {
        props: {
            pages:[
                ...page,
            ],
        },
    }
}
