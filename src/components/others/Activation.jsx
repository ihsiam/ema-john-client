import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../utility/baseUrl";

export default function Activation({ role }) {
  const { token } = useParams();
  const [response, setRes] = useState(null);

  useEffect(() => {
    if (token) {
      const sendReq = async () => {
        await axios
          .post(
            `${baseUrl}/${role}/activate`,
            { token },
            { withCredentials: true }
          )
          .then((res) => {
            if (res.data.success === true) {
              setRes("Successfully activated");
            } else {
              setRes(res.data.msg);
            }
          })
          .catch((err) => {
            setRes(err.response.data.msg);
          });
      };
      sendReq();
    }
  }, [token, role]);

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <p>{response}</p>
    </div>
  );
}

Activation.propTypes = {
  role: PropTypes.string.isRequired,
};
