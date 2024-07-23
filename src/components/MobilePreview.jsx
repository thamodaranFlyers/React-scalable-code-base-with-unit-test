import { DeviceFrameset, DeviceEmulator } from "react-device-frameset";
import PropTypes from "prop-types";
import "react-device-frameset/styles/marvel-devices.min.css";
import "react-device-frameset/styles/device-emulator.min.css";

const MobilePreview = ({ children }) => {
  return (
    <DeviceEmulator>
      {(props) => <DeviceFrameset {...props}>{children}</DeviceFrameset>}
    </DeviceEmulator>
  );
};

export default MobilePreview;

MobilePreview.propTypes = {
  children: PropTypes.any,
};
