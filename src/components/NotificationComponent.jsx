import { useState, useEffect } from "react";
import { Bounce, toast } from "react-toastify";

import { requestFCMToken, onMessageListener } from "../utils/firebaseUtils";

const NotificationComponent = () => {
  const [notificationVals, setNotification] = useState({
    title: "",
    body: "",
    isShow: false,
  });
  const notify = () =>
    toast(<ToastDisplay />, {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: () => {
        setNotification({ ...notificationVals, isShow: false });
      },
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  function ToastDisplay() {
    return (
      <div>
        <div>{notificationVals?.title}</div>
        <p>{notificationVals?.body}</p>
      </div>
    );
  }

  useEffect(() => {
    if (notificationVals?.title) {
      notify();
    }
  }, [notificationVals]);

  requestFCMToken();

  onMessageListener()
    .then((payload) => {
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
        isShow: true,
      });
    })
    .catch((err) => console.log("failed: ", err));
};

export default NotificationComponent;
