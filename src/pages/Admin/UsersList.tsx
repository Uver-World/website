import { EditIcon } from "@chakra-ui/icons";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getOrganizations, loginWithID, loginWithToken } from "../../api/users";
import styles from "./styles/UserList.module.css";

interface Organisation {
  creation_date: string;
  member_ids: [];
  name: string;
  owner_id: string;
  projects_ids: [];
  server_ids: [];
  unique_id: string;
}

interface User {
  username: string;
  unique_id: string;
  logins: [];
  authentication: {
    Credentials: {
      email: string;
      password: string;
      username: string | undefined;
    };
  };
  creation_date: string;
}

export const UsersList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState<User[]>([]);
  const [organisations, setOrganisations] = React.useState<Organisation[]>([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }

    const getUser = async () => {
      const user = await loginWithToken(localStorage.getItem("token") || "");

      if (user.data.code && user.data.code !== 200) {
        alert(user.data.message);
        navigate("/login");
      }

      getOrgs(user.data.unique_id);
    };

    const getOrgs = async (id: string) => {
      const orgs = await getOrganizations(
        id,
        localStorage.getItem("token") || ""
      );
      setOrganisations(orgs.data);
      getMembers(orgs.data);
    };

    const getMembers = async (orgs: Organisation[]) => {
      for (const org of orgs) {
        for (const member of org.member_ids) {
          const user = await loginWithID(member);
          setUsers((users) => [...users, user.data]);
        }
      }
    };

    getUser();
  }, [navigate]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User management</h1>

      <TableContainer>
        <Table variant="simple" className={styles.table}>
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
                <Td>{user.authentication.Credentials.username}</Td>
                <Td>
                  {organisations.map((org) => {
                    if (org.member_ids.includes(user.unique_id as never)) {
                      return org.name;
                    } else {
                      return null;
                    }
                  })}
                </Td>
                <Td>
                  <EditIcon
                    className={styles.editIcon}
                    onClick={() => navigate(`/admin/users/${user.unique_id}`)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
