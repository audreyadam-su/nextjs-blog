import Layout from '../../components/layout'
import Section from '../../components/section'
import Row from '../../components/row';
import Card from '../../components/card';
import Col from '../../components/col';


import { getAllPeople } from '../../lib/api'

export async function getStaticProps()  {

    const people = await getAllPeople()
    return {
        props: {people}
    }
}

export default function People({people}) {
    return (
        <Layout>
            <h1>People</h1>
           <section>
               {people.edges.map((edge, index) =>{
                    const { node } = edge;
                    return <Col sm={6} md={4} lg={3} key={index}>
                        <Card node={node} parentPath = "people" />
                     
                </Col>
               })}
           </section>

        </Layout>
    )
}