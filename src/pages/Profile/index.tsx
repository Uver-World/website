import { Box, Button, Center, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getOrganizations, loginWithToken } from "../../api/users";
import team from "../../assets/img/team.jpg";
import styles from "./styles/index.module.css";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    unique_id: "",
    logins: [],
    group: "",
    authentication: {
      Credentials: {
        email: "",
        password: "",
      },
    },
    creation_date: "",
  });
  const [orgs, setOrgs] = useState([]);

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

      setUser(user.data);
      getOrgs(user.data.unique_id);
    };

    const getOrgs = async (id: string) => {
      const orgs = await getOrganizations(
        id,
        localStorage.getItem("token") || ""
      );

      setOrgs(orgs.data);
    };

    getUser();
  }, [navigate]);

  return (
    <div className={styles.container}>
      <Box mx={10}>
        <Center>
          {/* TODO: logo */}
          <img src={team} alt="Notre équipe" className={styles.team} />
        </Center>
        <Center>
          <h1 className={styles.title}>{user.username}</h1>
        </Center>
        <SimpleGrid columns={3} mt={12} className="max-w-full mx-auto">
          <Box>
            <p className={styles.additionalText}>My organisations</p>

            {orgs.map((org: any, index) => (
              <div key={index}>
                <Button
                  className={styles.pOrgaInput}
                  onClick={() =>
                    navigate(`/admin/organisations/${org.unique_id}`)
                  }
                  style={{ maxWidth: "400px" }}
                >
                  {org.name}
                </Button>
              </div>
            ))}

            <div>
              <Link to="/admin/organisations" className="mt-6 underline">
                see all organisations
              </Link>
            </div>
          </Box>
          <Box>
            <p className={styles.additionalText}>My informations</p>
            <p className="mt-4 mb-2 ml-2">Email</p>
            <p className={styles.pInput}>
              {user.authentication.Credentials.email}
            </p>
            <p className="mt-4 mb-2 ml-2">License</p>
            <p className={styles.pInput}>1XC4-DF43-CG24-4S3R</p>
          </Box>
          <Box>
            <Center>
              <p className={styles.additionalText}>Actions</p>
            </Center>
            <Center>
              <div className={styles.addContainer}>
                <Button
                  className={styles.button}
                  onClick={() => navigate("/prices")}
                >
                  Reset password
                </Button>
              </div>
            </Center>
            <Center>
              <div className={styles.addContainer}>
                <Button
                  className={styles.button}
                  onClick={() => navigate("/prices")}
                >
                  Purchase license{" "}
                </Button>
              </div>
            </Center>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Profile;
