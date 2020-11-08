import { getPageBySlug, getAllPages } from '../../lib/api';
import Container from '../../components/Container';
import Nav from '../../components/Nav';
import { useRouter } from 'next/router';


export default function areaPage({ page }) {
    const router = useRouter();
    console.log(page)
    return (
        <Container>
            <Nav/>
            {/* {
                router.isFallback ?
            } */}
            <h2>{page.title}</h2>
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
                ...page
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