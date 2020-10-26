import { getPageBySlug, getAllPages } from '../../lib/api';


export default function areaPage({ page }) {
    console.log(page, 'page content')
    return (
        <p>{page.content}</p>
    )
}

export async function getStaticProps({ params }) {
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
        fallback:false,
    }
    
}