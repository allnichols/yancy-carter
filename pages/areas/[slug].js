import { getPageBySlug, getAllPages } from '../../lib';


export default function areaPage({ page }) {
    console.log(page)
    return (
        <p>page</p>
    )
}

export async function getStaticProps({ params }) {
    const page = getPageBySlug(params.slug);
    console.log(page);
}