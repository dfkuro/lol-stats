import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

const reactotron = Reactotron.configure({ name: "lol-stats", host: "192.168.100.7" }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .connect(); // let's connect!

export default reactotron;
