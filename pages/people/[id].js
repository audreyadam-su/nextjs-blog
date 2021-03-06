import Layout from '../../components/layout'
import Image from 'next/image'
import Link from 'next/link'

import {getSinglePerson, getAllPeopleSlugs} from '../../lib/api'


export async function getStaticPaths() {

    const allSlugs = await getAllPeopleSlugs()

    const paths= allSlugs.edges.map(edge => {
            const {slug} = edge.node
            return{
                params: {
                    id: slug
                }
            }

    })

            return {
                paths, 
                fallback: false
            }
}


export async function getStaticProps({params}){

    const peopleData = await getSinglePerson (params.id)

    return {
        props: {
            peopleData
        }
    }

}

 


export default function People({peopleData}) {

    const {title, featuredImage, content} = peopleData;

    const {sourceUrl, mediaDetails, altText} = featuredImage.node;

    const {width, height} = mediaDetails;

    return(
        
             <Layout>
    
                <Link href="/menu"> 
                <a>Back to Menu</a>
                </Link>
                <Image 
                    src={sourceUrl}
                    width={width}
                    height={height}
                    alt={altText}
                
                />
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML= {{__html: content }} />

   
</Layout>
            
       

    )} 



    



