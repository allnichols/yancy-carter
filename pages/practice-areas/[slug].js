import { getPageBySlug, getAllPages } from '../../lib/api';
import Container from '../../components/Container';
import Nav from '../../components/Nav';


export default function areaPage({ page }) {
    console.log(page, 'page content')
    return (
        <Container>
            <Nav/>
            <p>{page.content}</p>
        </Container>
    )
}

export async function getStaticProps({ params }) {
    console.log(params)
    const page = getPageBySlug(params.slug, [
        'title',
        'content'
    ]);

    console.log(page, 'page')
    return {
        props: {
            page:{
                ...page,
                
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
        fallback:true,
    }
    
}