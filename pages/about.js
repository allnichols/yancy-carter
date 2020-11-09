import Main from '../components/Container';
import Footer from '../components/footer';
import Nav from '../components/Nav';
import Head from 'next/head';

function about() {
    return(

    <>
    <Head>
            <title>Yancy Carter - About</title>
            <link rel="stylesheet" href="https://use.typekit.net/pou0knh.css"></link>
    </Head>
        <Main>
         <Nav />
         <div style={{marginTop:45}}>
         <h4 className="small-header-dark">About</h4>
         <h1>Yancy Carter</h1>

         <p> 
            I am Yancy Carter, born and raised in New Orleans, Louisiana with a lifelong dream of becoming an attorney.  
            I attended St. Augustine High School and it was then that I knew from my passion of competitive speech and debate that I could see myself in a 
            courtroom successfully litigating cases. I was a state champion as well as a national champion in this regard.   
            I graduated from Loyola University with a major in Political Science and a minor in business administration. 
             I went on to attend southern Law Center where I earned my Juris Doctorate.  I was a Member of The Southern University Law Review and Southern University Moot Court Board.  
            I was president of Delta Theta Phi Fraternity, the largest legal fraternity on campus.
         </p>

         <p>
            Today, I am a family man with two beautiful kids and a lovely wife residing in Houston, Texas.  
            I am a Texan, Saints and Rockets sports fan. 
            I am active member of the Church of Champions, Kappa Alpha Psi Fraternity Incorporated and a 
            board member of the EPHRIAHM foundation, a nonprofit organization that works with the general public to provide counseling to indigent families.
         </p>

         <p>
            As a practicing attorney for over 20 years, I am still motivated by the fact that I have the power to correct an injustice.  
            Hence, building a winning legal strategy for my clients to help them seek the justice they deserve still remains the most rewarding experiences I could ever ask for. 
            I am a member of the Houston Lawyers Association, Houston Bar Association, Southern District of Texas District Court. I am a member of the Louisiana Bar Association,
            Louisiana Middle District Court, Eastern District Court, Western District Court, Coushatta Tribal Court and finally a member of the United States Fifth Circuit Court of Appeals.
         </p>
         </div>
         
        </Main>
        <Footer />
    </>
    )
}

export default about;