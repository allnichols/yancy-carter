import Main from '../../components/Container';
import Nav from '../../components/Nav';
import Footer from '../../components/footer';
import { getAllPages } from '../../lib/api';

export default function practiceAreas({pages}) {
    
    return(
        <>
            <Main>
                <Nav />
                <h1>Practice Areas</h1>
            </Main>
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const page = getAllPages([
        'title',
        'slug',
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
