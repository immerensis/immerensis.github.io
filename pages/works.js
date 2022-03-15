import { Center, Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <Paragraph>
        <Center>
          No Posts
        </Center>
      </Paragraph>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
