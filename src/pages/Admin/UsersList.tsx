import styles from './styles/UserList.module.css';
import {Badge, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import React from "react";
import {EditIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getOrganizations, loginWithID, loginWithToken} from "../../api/users";

interface Organisation {
  creation_date: string,
  member_ids: [],
  name: string,
  owner_id: string,
  projects_ids: [],
  server_ids: [],
  unique_id: string
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

export const UsersList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState<User[]>([]);
  const [user, setUser] = React.useState<User>();
  const [organisations, setOrganisations] = React.useState<Organisation[]>([]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }

    const getUser = async () => {
      const user = await loginWithToken(localStorage.getItem('token') || '');
      
      if (user.data.code && user.data.code !== 200) {
        alert(user.data.message)
        navigate('/login')
      }
      
      setUser(user.data)
      getOrgs(user.data.unique_id)
    }

    const getOrgs = async (id: string) => {
      const orgs = await getOrganizations(id, localStorage.getItem('token') || '');
      setOrganisations(orgs.data)
      getMembers(orgs.data)
    }

    const getMembers = async (orgs: Organisation[]) => {
      orgs.forEach(async (org) => {
        org.member_ids.forEach(async (member) => {
          const user = await loginWithID(member);
          setUsers([...users, user.data])
        })
      })
    }

    getUser()
    console.log(users)
  }, [navigate])

  return (
  <div className={styles.container}>
    <h1 className={styles.title}>User management</h1>

    <TableContainer>
      <Table variant='simple' className={styles.table}>
        <Thead>
          <Tr>
            <Th>Username</Th>
            <Th>Organisations</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <Tr key={index}>
              <Td>
                  <Badge colorScheme="blue" className={styles.badge}>{user.group}</Badge>
                {user.username}
              </Td>
              <Td>{
                organisations.map((org) => {
                  if (org.member_ids.includes(user.unique_id as never)) {
                    return org.name
                  } else {
                    return null
                  }
                })
                }</Td>
              <Td>
                <EditIcon className={styles.editIcon} onClick={() => navigate(`/admin/users/${user.unique_id}`)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  </div>
  )
}
