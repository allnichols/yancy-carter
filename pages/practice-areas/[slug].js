import { getPageBySlug, getAllPages } from '../../lib/api';
import Container from '../../components/Container';
import Nav from '../../components/Nav';


export default function areaPage({ page }) {
    
    return (
        <Container>
            <Nav/>
            <p>{page.content}</p>
        </Container>
    )
}

export async function getStaticProps({ params }) {
    
    const page = getPageBySlug(params.slug, [
        'title',
        'content'
    ]);
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