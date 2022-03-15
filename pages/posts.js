import { Center, Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Paragraph>
        <Center>
          No Posts
        </Center>
      </Paragraph>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
