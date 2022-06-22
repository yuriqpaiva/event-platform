// import { gql, useQuery } from '@apollo/client';

import { Event } from "./pages/Event";

// const GET_LESSONS_QUERY = gql`
//   query {
//     lessons {
//       id
//       title
//     }
//   }
// `;

// interface Lesson {
//   id: string;
//   title: string;
// }

function App() {
  // Using Apollo's hook to query GraphQL from our Backend
  // We defined our client and provide him with Apollo's Provider at main.tsx file
  // const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <div>
      <Event />
    </div>
  );
}

export default App;
