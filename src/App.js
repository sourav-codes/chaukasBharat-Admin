import * as React from "react";
import { Admin, Resource,} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./components/user";
import { PostCreate, PostList, PostEdit } from "./components/post_create";
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => ( 
<Admin authProvider={authProvider}  dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>
  );

export default App;