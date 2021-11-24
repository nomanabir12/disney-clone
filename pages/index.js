import { gql, GraphQLClient } from 'graphql-request';

export const getStaticProps = async () => {
  const url = "https://api-ap-northeast-1.graphcms.com/v2/ckwd0byyq514l01w39qx1he6g/master"
  const graphQLClient = new GraphQLClient(url, {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Mzc3NTg0MzYsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5ncmFwaGNtcy5jb20vdjIvY2t3ZDBieXlxNTE0bDAxdzM5cXgxaGU2Zy9tYXN0ZXIiLCJodHRwczovL21hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiJkMGJlYmQxMS01MjA3LTQ0Y2QtODA1NS1iZGRhNTU0OGM3ZWIiLCJqdGkiOiJja3dkajM1ZnQwMjB3MDF6NjR0bXgxa3l5In0.t5mIt43Wfa-8eKMRN8QQyPHDuASn7lTZfvWsg89Qv5u4os8wMKQ1eKF_LKD9dac2woqX80jXqm_gWNPaVnVVTu19BEfUV0L2-jTS_IExt1p8Q7-b81FDtSk2kC0T7U_U8Pdki9B-JiHSpMizcYn8Yii88aalZrl4T7GXHZsiqvf-hx3PClOBJzbZJS1E8cLOfaSCji_m0XKVZKukQZNNdYEdZVijX7GtknPDGVGUI8UcdSaxF0-NOSB_jTXUPlhGAEid7oCO8PFNoVH-FUq-nRxW81ueBEqBIfWnHvLo5Ld1gv142_oIDLpr0ZD0B5zxilSBZbSpAcvqG8DYACE894DQSxpFNzH9Xe-hxxjb_ngFHNrsv44mwTgccsJ_u8bIuRIzqfdN9FFNaGI0dd23JzayHCU2itNZNX2aS--0YN5zurKe5v6l-VroWD9HJ7q-fUJF39jXeT2sg8Mvhkhdn2fKiObR9q-6Y-WBWQesi7gvNrrhx5nUsr4Jv10WnkKXPR1EJT1Aejz8JHQOGtFrkhZGoiD6JRRBJHxK8727CQpJ1VUQqFHg7UNrN8LmyAaZJToC697lpqWodll43DAF7dLQfzZrGaBT-NqmazuWbgSB0UDpzNfzTS5GIQpbHynl3fUuSXbwvrFbEuCIKBBb4tkPKLFp1zqz9uRxWcrOaDk"
    }
  })


const query = gql`
query {
  videos {
    createdAt,
    id,
    title,
    description,
    seen,
    slug,
    tags
  }
}
`
const data = await graphQLClient.request(query)
  const videos = data.videos

  return {
    props: {
      videos
    }
  }
}

  

const Home = ({ videos }) => {
  console.log(videos)
  return (
  <div>
     Hello
    </div>
  )
};

export default Home;
