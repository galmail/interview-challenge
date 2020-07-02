import enableHooks from "jest-react-hooks-shallow";
import fetchMock from "jest-fetch-mock";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

enableHooks(jest);
fetchMock.enableMocks();
configure({ adapter: new Adapter() });
