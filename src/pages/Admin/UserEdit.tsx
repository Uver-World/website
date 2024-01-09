import styles from './styles/UserList.module.css';
import {Box, Button, Select, SimpleGrid} from "@chakra-ui/react";
import React, { useEffect } from "react";
import {Navigate, useParams} from "react-router-dom";
import {loginWithID} from "../../api/users";

enum Role {
  ADMIN = 'Administrator',
  USER = 'User'
}

interface User {
  username: string,
  unique_id: string,
  logins: [],
  group: string,
  authentication: {
    Credentials: {
      email: string,
      password: string
    }
  },
  creation_date: string,
}

export const UserEdit = () => {
  const {id} = useParams();
  const [user, setUser] = React.useState<User>();

  useEffect(() => {
    if (!id) return;

    const getUser = async () => {
      const user = await loginWithID(id);
      setUser(user.data)
    }

    getUser()
  }, [])


  if (!user) return <>error</>
  // if (!user) return <Navigate to="/admin/users" />

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{user.username}</h1>

      <SimpleGrid columns={2} spacing={10} mt={12} className="max-w-4xl mx-auto">
        <Box>
          <p className={styles.label}>Manage roles</p>
          <Select className={styles.addInput}>
            {Object.values(Role).map((role) => (
              <option key={role} value={role} selected={user.group.includes(role)}>{role}</option>
            ))}
          </Select>

          <p className={styles.label} style={{
            marginTop: '2rem'
          }}>Last activities</p>
          <div className={styles.lastActivities}>
            <p className={styles.pInput}>
              Sn0w join the organization
            </p>
            <p className={styles.pInput}>
              Sn0w has been promoted to Administrator by Matthew
            </p>
            <p className={styles.pInput}>
              Sn0w join the project UverWorld
            </p>
          </div>
        </Box>
        <Box>
          <p className={styles.label}>User info</p>
          <p className={styles.pInput}>
            {user.username}
          </p>
          <p className={styles.pInput}>
            {user.authentication.Credentials.email}
          </p>
          <Button colorScheme='blue' variant='link' className="mt-2">
            Forgot password
          </Button>
        </Box>
      </SimpleGrid>

      <div className="max-w-4xl mx-auto mt-8 flex justify-center">
        <Button colorScheme='red' className="mt-2 mr-24">
          Delete account
        </Button>
        <div className="ml-24">
          <Button colorScheme='gray' className="mt-2 mr-2">
            Cancel
          </Button>
          <Button colorScheme='blue' className="mt-2 ml-2">
            Update
          </Button>
        </div>
      </div>
    </div>
  )
}
