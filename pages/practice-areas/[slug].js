import Head from 'next/head';
import { getPageBySlug, getAllPages } from '../../lib/api';
import Container from '../../components/Container';
import Nav from '../../components/Nav';
import markdownToHtml from '../../lib/markdownToHtml';
import Footer from '../../components/footer';


export default function areaPage({ page }) {
    
    return (
        <>
        <Head>
            <title>Create Next App</title>
            <link rel="stylesheet" href="https://use.typekit.net/pou0knh.css"></link>
      </Head>
        <Container>
            <Nav/>
        
        <div style={{marginTop:45}}>
            <h4 className="small-header-dark">Practice Area</h4>
            <h1>{page.title}</h1>
            <div className="area-styles" dangerouslySetInnerHTML={{ __html: page.content}} />
        </div>
            

        </Container>
        <Footer />
        </>
    )
}

export async function getStaticProps({ params }) {
    
    const page = getPageBySlug(params.slug, [
        'title',
        'content'
    ]);

    const content = await markdownToHtml(page.content || '');

    return {
        props: {
            page:{
                ...page,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const pages = getAllPages(['slug']);

    return{
        paths: pages.map( page => {
            return {
                params: {
                    slug: page.slug
                }
            }
        }),
        fallback:false,
    }
    
}